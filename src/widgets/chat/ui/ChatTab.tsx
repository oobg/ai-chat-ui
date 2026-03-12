import { useCallback, useMemo, useRef, useState } from "react";
import { useChatMessages } from "@/features/chat";
import type { CommandItem } from "@/widgets/commands";
import { MOCK_COMMANDS } from "@/widgets/commands";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { SendButton } from "./SendButton";
import { SlashCommandHelper } from "./SlashCommandHelper";

export function ChatTab() {
  const listRef = useRef<HTMLDivElement | null>(null);
  const { messages, input, setInput, sendMessage, markAllRead } = useChatMessages();

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  const handleSubmit = useCallback(() => {
    const trimmed = input.trim();
    if (!trimmed) return;
    sendMessage(trimmed);
    window.setTimeout(scrollToBottom, 20);
    window.setTimeout(scrollToBottom, 50);
  }, [input, sendMessage, scrollToBottom]);

  const slashSegment = useMemo(() => {
    if (!input.startsWith("/")) return "";
    const m = input.match(/^\/[^\s\n]*/);
    return m ? m[0] : "";
  }, [input]);

  const hasSpaceAfterSegment =
    slashSegment.length > 0 &&
    slashSegment.length < input.length &&
    /[\s\n]/.test(input[slashSegment.length] ?? "");

  const isExactCommand =
    slashSegment.length > 0 &&
    MOCK_COMMANDS.some((c) => c.command === slashSegment);

  const showHelper =
    input.startsWith("/") && !(hasSpaceAfterSegment && isExactCommand);

  const suggestedCommands = useMemo(() => {
    if (!slashSegment) return [];
    return MOCK_COMMANDS.filter((c) => c.command.startsWith(slashSegment));
  }, [slashSegment]);

  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const safeHighlightedIndex =
    suggestedCommands.length === 0
      ? 0
      : Math.min(highlightedIndex, suggestedCommands.length - 1);

  const handleSelectCommand = useCallback(
    (command: CommandItem) => {
      const rest = input.slice(slashSegment.length);
      setInput(command.command + (rest.startsWith(" ") ? rest : " " + rest));
    },
    [input, slashSegment, setInput],
  );

  const handleSlashKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (!showHelper || suggestedCommands.length === 0) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setHighlightedIndex((prev) => (prev + 1) % suggestedCommands.length);
        return;
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setHighlightedIndex(
          (prev) => (prev - 1 + suggestedCommands.length) % suggestedCommands.length,
        );
        return;
      }
      if (event.key === "Enter" && !event.shiftKey && suggestedCommands[safeHighlightedIndex]) {
        event.preventDefault();
        handleSelectCommand(suggestedCommands[safeHighlightedIndex]);
        return;
      }
      if (event.key === "Tab" && suggestedCommands[safeHighlightedIndex]) {
        event.preventDefault();
        handleSelectCommand(suggestedCommands[safeHighlightedIndex]);
      }
    },
    [showHelper, suggestedCommands, safeHighlightedIndex, handleSelectCommand],
  );

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/70 shadow-xl">
      <header className="flex items-center justify-between border-b border-slate-800/80 bg-slate-950/80 px-5 py-3.5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span
              className="h-2.5 w-2.5 rounded-full opacity-80"
              style={{ backgroundColor: "var(--color-primary-strong)" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full opacity-80"
              style={{ backgroundColor: "var(--color-primary)" }}
            />
            <span
              className="h-2.5 w-2.5 rounded-full opacity-80"
              style={{ backgroundColor: "var(--color-primary-muted)" }}
            />
          </div>
          <span
            className="ml-3 text-xs font-semibold uppercase tracking-[0.24em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            AI 채팅
          </span>
        </div>
        <button
          type="button"
          onClick={markAllRead}
          className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-[var(--color-primary-muted)] hover:bg-slate-900 hover:text-[var(--color-primary-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
          모두 읽음으로 표시
        </button>
      </header>

      <main className="flex flex-1 flex-col overflow-hidden bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950">
        <MessageList messages={messages} listRef={listRef} />

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="border-t border-slate-800/80 bg-slate-950/90 px-5 py-4"
        >
          <div className="flex items-end gap-3">
            <div className="relative flex-1">
              {showHelper && (
                <SlashCommandHelper
                  commands={suggestedCommands}
                  highlightedIndex={safeHighlightedIndex}
                  onSelect={handleSelectCommand}
                />
              )}
              <ChatInput
                value={input}
                onChange={setInput}
                onSubmit={handleSubmit}
                commands={MOCK_COMMANDS}
                onKeyDown={handleSlashKeyDown}
              />
            </div>
            <SendButton disabled={!input.trim()} />
          </div>
        </form>
      </main>
    </div>
  );
}
