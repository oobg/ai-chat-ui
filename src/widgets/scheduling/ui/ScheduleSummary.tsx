import type { ScheduleFormState } from "@/widgets/scheduling/model/types";

type ScheduleSummaryProps = {
  schedule: ScheduleFormState;
};

export function ScheduleSummary({ schedule }: ScheduleSummaryProps) {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        요약
      </h3>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-slate-500">제목</dt>
          <dd className="text-slate-100">{schedule.title || "—"}</dd>
        </div>
        <div>
          <dt className="text-slate-500">날짜</dt>
          <dd className="text-slate-100">{schedule.date || "—"}</dd>
        </div>
        <div>
          <dt className="text-slate-500">시간</dt>
          <dd className="text-slate-100">{schedule.time || "—"}</dd>
        </div>
        <div>
          <dt className="text-slate-500">반복</dt>
          <dd className="text-slate-100">{schedule.repeat ? "예" : "아니오"}</dd>
        </div>
      </dl>
    </div>
  );
}
