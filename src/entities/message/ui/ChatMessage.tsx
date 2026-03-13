import type { Message } from "../model/types";
import { MessageState } from "./MessageState";

const SLASH_COMMAND_REGEX = /^(\/[^\s\n]*)([\s\S]*)$/;
const SLASH_COMMAND_GLOBAL_REGEX = /(\/[^\s\n"]+)/g;

function parseUserContent(content: string): { command: string; rest: string } | null {
  const trimmed = content.trimStart();
  const match = trimmed.match(SLASH_COMMAND_REGEX);
  if (!match || !match[1]) return null;
  return { command: match[1], rest: match[2]?.trimStart() ?? "" };
}

function parseContentWithSlashCommands(content: string): Array<{ type: "code"; value: string } | { type: "text"; value: string }> {
  const parts = content.split(SLASH_COMMAND_GLOBAL_REGEX);
  return parts.map((part) =>
    /^\/[^\s\n"]+$/.test(part)
      ? { type: "code" as const, value: part }
      : { type: "text" as const, value: part },
  );
}

const codeBlockClassName =
  "relative bottom-[0.065em] inline-flex items-center rounded px-[0.4em] py-[0.2em] text-[85%] font-semibold leading-normal text-[var(--color-primary-muted)] bg-[rgba(33,169,102,0.2)]";

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  if (isUser) {
    const parsed = parseUserContent(message.content);
    const hasSlashCommand = parsed && parsed.command.length > 1;

    return (
      <div className="flex w-full justify-end">
        <div className="flex max-w-xl items-end gap-2">
          <div className="rounded-2xl bg-sky-500/20 px-4 py-2.5 text-sm text-slate-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.25)] ring-1 ring-sky-400/30">
            {hasSlashCommand ? (
              <span className="flex flex-wrap items-baseline gap-1.5">
                <code className={codeBlockClassName}>
                  {parsed.command}
                </code>
                {parsed.rest ? <span className="whitespace-pre-wrap">{parsed.rest}</span> : null}
              </span>
            ) : (
              message.content
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-start">
      <div className="flex max-w-xl items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-600/80">
          <span className="text-xs font-semibold tracking-wide text-slate-100">AI</span>
        </div>
        <MessageState status={message.status}>
          <p className="text-sm leading-relaxed text-slate-100">
            {parseContentWithSlashCommands(message.content).map((part, i) =>
              part.type === "code" ? (
                <code key={i} className={codeBlockClassName}>
                  {part.value}
                </code>
              ) : (
                <span key={i} className="whitespace-pre-wrap">
                  {part.value}
                </span>
              ),
            )}
          </p>
        </MessageState>
      </div>
    </div>
  );
}
