import type { ActivityRecord } from "../model/types";

type ActivityItemProps = {
  activity: ActivityRecord;
  onSelect?: (activity: ActivityRecord) => void;
};

export function ActivityItem({ activity, onSelect }: ActivityItemProps) {
  const statusColor =
    activity.status === "success"
      ? "text-slate-400"
      : activity.status === "running"
        ? "text-[var(--color-primary-muted)]"
        : "text-red-400";

  return (
    <button
      type="button"
      onClick={() => onSelect?.(activity)}
      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/60 p-3 text-left transition hover:border-slate-600 hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-200">{activity.title}</span>
        <span className={`text-xs ${statusColor}`}>{activity.status}</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">{activity.type} · {activity.timestamp}</p>
    </button>
  );
}
