import { useState } from "react";
import type { Message } from "@/entities/message";

export type ScheduleCreatedData = {
  title: string;
  date: string;
  time: string;
  memo?: string;
};

type ScheduleCreationBlockProps = {
  message: Message;
  onScheduleCreated: (messageId: string, data: ScheduleCreatedData) => void;
};

export function ScheduleCreationBlock({
  message,
  onScheduleCreated,
}: ScheduleCreationBlockProps) {
  const payload = message.schedulePayload;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [title, setTitle] = useState(payload?.title ?? "");
  const [date, setDate] = useState(payload?.date ?? "");
  const [time, setTime] = useState(payload?.time ?? "");
  const [memo, setMemo] = useState(payload?.memo ?? "");

  const handleSubmit = () => {
    setIsSubmitting(true);
    // 로딩 UI 표시 후 요약으로 전환
    const data = { title, date, time, memo };
    window.setTimeout(() => {
      onScheduleCreated(message.id, data);
    }, 1200);
  };

  if (!payload) return null;

  if (payload.status === "created") {
    return (
      <div className="flex w-full justify-start">
        <div className="flex max-w-xl items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-600/80">
            <span className="text-xs font-semibold tracking-wide text-slate-100">
              AI
            </span>
          </div>
          <div className="rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-3 shadow-sm ring-1 ring-slate-700/50">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              일정 요약
            </p>
            <p className="mt-1.5 text-sm font-medium text-slate-100">
              {payload.title || "(제목 없음)"}
            </p>
            <p className="mt-1 text-sm text-slate-300">
              {[payload.date, payload.time].filter(Boolean).join(" ") || "-"}
            </p>
            {payload.memo ? (
              <p className="mt-2 border-t border-slate-700/80 pt-2 text-xs text-slate-400">
                {payload.memo}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  if (isSubmitting) {
    return (
      <div className="flex w-full justify-start">
        <div className="flex max-w-xl items-start gap-3">
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-600/80">
            <span className="text-xs font-semibold tracking-wide text-slate-100">
              AI
            </span>
          </div>
          <div className="flex min-h-[120px] w-full items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-6 shadow-sm ring-1 ring-slate-700/50">
            <div className="flex flex-col items-center gap-3">
              <div
                className="h-8 w-8 animate-spin rounded-full border-2 border-slate-600 border-t-[var(--color-primary)]"
                aria-hidden
              />
              <p className="text-sm text-slate-400">일정 생성 중...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full justify-start">
      <div className="flex max-w-xl items-start gap-3">
        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 ring-1 ring-slate-600/80">
          <span className="text-xs font-semibold tracking-wide text-slate-100">
            AI
          </span>
        </div>
        <div className="w-full rounded-2xl border border-slate-700/80 bg-slate-900/80 px-4 py-4 shadow-sm ring-1 ring-slate-700/50">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-slate-400">
            일정 생성
          </p>
          <div className="space-y-3">
            <div>
              <label
                htmlFor={`schedule-title-${message.id}`}
                className="mb-1 block text-xs text-slate-400"
              >
                제목
              </label>
              <input
                id={`schedule-title-${message.id}`}
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="일정 제목"
                className="w-full rounded-lg border border-slate-600/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[var(--color-primary-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-muted)]"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor={`schedule-date-${message.id}`}
                  className="mb-1 block text-xs text-slate-400"
                >
                  날짜
                </label>
                <input
                  id={`schedule-date-${message.id}`}
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border border-slate-600/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-[var(--color-primary-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-muted)]"
                />
              </div>
              <div>
                <label
                  htmlFor={`schedule-time-${message.id}`}
                  className="mb-1 block text-xs text-slate-400"
                >
                  시간
                </label>
                <input
                  id={`schedule-time-${message.id}`}
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full rounded-lg border border-slate-600/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 focus:border-[var(--color-primary-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-muted)]"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor={`schedule-memo-${message.id}`}
                className="mb-1 block text-xs text-slate-400"
              >
                메모 (선택)
              </label>
              <textarea
                id={`schedule-memo-${message.id}`}
                value={memo}
                onChange={(e) => setMemo(e.target.value)}
                placeholder="메모"
                rows={2}
                className="w-full resize-none rounded-lg border border-slate-600/80 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:border-[var(--color-primary-muted)] focus:outline-none focus:ring-1 focus:ring-[var(--color-primary-muted)]"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="mt-4 rounded-lg border border-[var(--color-primary-muted)]/80 bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-selection-text)] transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-muted)] focus:ring-offset-2 focus:ring-offset-slate-900 disabled:pointer-events-none disabled:opacity-60"
          >
            일정 생성
          </button>
        </div>
      </div>
    </div>
  );
}
