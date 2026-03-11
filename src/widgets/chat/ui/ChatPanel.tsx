import { useCallback, useRef, useState } from "react";
import type { Message } from "../../../entities/message/model/types";
import { ChatMessage } from "../../../entities/message/ui/ChatMessage";

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: createId(),
    role: "assistant",
    content: "무엇을 도와드릴까요? 오른쪽 아래 입력창에 요청을 적어보세요.",
    status: "completed_read",
  },
];

export function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, []);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
      status: "completed_read",
    };

    const assistantId = createId();
    const assistantPlaceholder: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      status: "in_progress",
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setInput("");

    window.setTimeout(() => {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantId
            ? {
                ...message,
                content: `"${trimmed}" 요청을 받았어요.\n지금은 데모 모드라 실제 호출 대신 이렇게 응답 상태만 보여줍니다.`,
                status: "completed_unread",
              }
            : message,
        ),
      );
      window.setTimeout(scrollToBottom, 50);
    }, 900);

    window.setTimeout(scrollToBottom, 20);
  };

  const handleMarkAllRead = () => {
    setMessages((prev) =>
      prev.map((message) =>
        message.role === "assistant" && message.status === "completed_unread"
          ? { ...message, status: "completed_read" }
          : message,
      ),
    );
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center px-3 py-4"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text-primary)",
      }}
    >
      <div className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/70 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl">
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
            onClick={handleMarkAllRead}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-slate-200 transition hover:border-[var(--color-primary-muted)] hover:bg-slate-900 hover:text-[var(--color-primary-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
            모두 읽음으로 표시
          </button>
        </header>

        <main className="flex flex-1 flex-col bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950">
          <div
            ref={listRef}
            className="flex-1 space-y-4 overflow-y-auto px-5 pb-4 pt-5 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700/70"
          >
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-800/80 bg-slate-950/90 px-5 py-4"
          >
            <div className="flex items-end gap-3">
              <div className="relative flex-1">
                <textarea
                  rows={1}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="무엇이든 물어보세요. 엔터로 전송, Shift+Enter로 줄바꿈."
                  className="block w-full resize-none rounded-2xl border border-slate-700/80 bg-slate-950/90 px-3.5 py-2.5 text-sm text-slate-100 shadow-sm outline-none ring-0 placeholder:text-slate-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]"
                  onKeyDown={(event) => {
                    if (event.key === "Enter" && !event.shiftKey) {
                      event.preventDefault();
                      const form = event.currentTarget.form;
                      if (form) {
                        form.requestSubmit();
                      }
                    }
                  }}
                />
              </div>
              <button
                type="submit"
                className="inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-semibold shadow-lg transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "var(--color-selection-text)",
                  boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3)",
                }}
                disabled={!input.trim()}
              >
                보내기
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
