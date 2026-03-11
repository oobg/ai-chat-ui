import type { PropsWithChildren } from "react";
import type { MessageStatus } from "../model/types";

type MessageStateProps = PropsWithChildren<{
  status?: MessageStatus;
}>;

export function MessageState({ status, children }: MessageStateProps) {
  if (status === "in_progress") {
    return (
      <div className="relative flex max-w-xl flex-col gap-1">
        <div className="inline-flex items-end gap-2">
          <div className="rounded-2xl bg-slate-800/90 px-4 py-3 text-sm text-slate-50 shadow-md ring-1 ring-slate-700/60">
            <div className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
              AI 생성 중
            </div>
            <div className="flex items-center gap-1.5 text-slate-200">
              <span className="inline-block h-[0.8em] w-[7ch] rounded bg-slate-700/80" />
              <span className="inline-flex h-4 items-center gap-1">
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.05s]" />
                <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.2s]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "completed_unread") {
    return (
      <div className="relative flex max-w-xl flex-col gap-1">
        <div className="inline-flex items-start gap-2">
          <div className="relative rounded-2xl bg-slate-900/90 px-4 py-3 text-sm text-slate-50 shadow-md ring-1 ring-[var(--color-primary-muted)]/50">
            {children}
            <div className="mt-2 flex items-center gap-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-[var(--color-primary-muted)]">
              <span
                className="h-1.5 w-1.5 rounded-full shadow-[0_0_10px_var(--color-primary)]"
                style={{ backgroundColor: "var(--color-primary)" }}
              />
              새 응답
            </div>
          </div>
        </div>
      </div>
    );
  }

  // completed_read 또는 status 미지정
  return (
    <div className="flex max-w-xl flex-col gap-1">
      <div className="inline-flex items-start gap-2">
        <div className="rounded-2xl bg-slate-900/80 px-4 py-3 text-sm text-slate-50 shadow-md ring-1 ring-slate-700/70">
          {children}
        </div>
      </div>
    </div>
  );
}
