import { useRef, useLayoutEffect } from "react";

type CommandItem = { command: string };

type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
  commands?: CommandItem[];
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
};

const MIRROR_PADDING = "px-3.5 py-2.5";
const SLASH_SEGMENT_REGEX = /^\/[^\s\n]*/;

export function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder = "무엇이든 물어보세요. 엔터로 전송, Shift+Enter로 줄바꿈.",
  disabled = false,
  commands,
  onKeyDown: onKeyDownProp,
}: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mirrorRef = useRef<HTMLDivElement>(null);
  const mirrorInnerRef = useRef<HTMLDivElement>(null);

  const segment = value.startsWith("/") ? (value.match(SLASH_SEGMENT_REGEX)?.[0] ?? "") : "";
  const hasSpaceAfterSegment =
    segment.length < value.length && /[\s\n]/.test(value[segment.length] ?? "");
  const isCommandMatch =
    segment.length > 0 &&
    Boolean(
      hasSpaceAfterSegment
        ? commands?.some((c) => c.command === segment)
        : commands?.some((c) => c.command.startsWith(segment)),
    );

  useLayoutEffect(() => {
    const ta = textareaRef.current;
    const inner = mirrorInnerRef.current;
    if (!ta || !inner) return;
    inner.style.minHeight = `${ta.scrollHeight}px`;
  }, [value]);

  const handleScroll = () => {
    const ta = textareaRef.current;
    const mirror = mirrorRef.current;
    if (ta && mirror) mirror.scrollTop = ta.scrollTop;
  };

  const showOverlay = value.startsWith("/") && segment.length > 0;

  return (
    <div className="relative w-full rounded-2xl border border-slate-700/80 bg-slate-950/90 shadow-sm focus-within:border-[var(--color-primary)] focus-within:ring-2 focus-within:ring-[var(--color-primary)]">
      {/* Mirror layer (behind): only when slash segment exists so overlay aligns */}
      {showOverlay ? (
        <div
          ref={mirrorRef}
          aria-hidden
          className={`absolute inset-0 overflow-auto rounded-2xl pointer-events-none ${MIRROR_PADDING} text-sm text-slate-100`}
        >
          <div
            ref={mirrorInnerRef}
            className="min-h-[1.5rem] w-full whitespace-pre-wrap break-words"
            style={{ lineHeight: "1.25rem" }}
          >
            {isCommandMatch ? (
              <>
                <span className="text-[var(--color-primary-muted)]">{segment}</span>
                {value.slice(segment.length)}
              </>
            ) : (
              value
            )}
          </div>
        </div>
      ) : null}

      <textarea
        ref={textareaRef}
        rows={1}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onScroll={handleScroll}
        placeholder={placeholder}
        disabled={disabled}
        className={
          showOverlay
            ? `block w-full resize-none rounded-2xl border-0 bg-transparent ${MIRROR_PADDING} text-sm text-transparent shadow-none outline-none ring-0 placeholder:text-slate-500 disabled:opacity-60 caret-slate-100`
            : `block w-full resize-none rounded-2xl border-0 bg-transparent ${MIRROR_PADDING} text-sm text-slate-100 shadow-none outline-none ring-0 placeholder:text-slate-500 disabled:opacity-60`
        }
        onKeyDown={(event) => {
          onKeyDownProp?.(event);
          if (event.defaultPrevented) return;
          if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            onSubmit();
          }
        }}
      />
    </div>
  );
}
