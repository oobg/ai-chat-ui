import type { Message } from "../model/types";
import { MessageState } from "./MessageState";

type ChatMessageProps = {
  message: Message;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  if (isUser) {
    return (
      <div className="flex w-full justify-end">
        <div className="flex max-w-xl items-end gap-2">
          <div
            className="rounded-2xl px-4 py-2.5 text-sm shadow-lg ring-1 ring-[var(--color-primary-muted)]/60"
            style={{
              backgroundColor: "var(--color-primary)",
              color: "var(--color-selection-text)",
              boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3), 0 4px 6px -4px rgba(0,0,0,0.2)",
            }}
          >
            {message.content}
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
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-slate-100">
            {message.content}
          </p>
        </MessageState>
      </div>
    </div>
  );
}
