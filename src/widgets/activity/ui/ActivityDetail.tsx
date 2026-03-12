import type { ActivityRecord } from "@/widgets/activity/model/types";

type ActivityDetailProps = {
  activity: ActivityRecord | null;
};

export function ActivityDetail({ activity }: ActivityDetailProps) {
  if (!activity) {
    return (
      <div className="rounded-xl border border-slate-700/80 bg-slate-900/40 p-6 text-center text-sm text-slate-500">
        항목을 선택하세요
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
      <h4 className="text-sm font-medium text-slate-200">{activity.title}</h4>
      <p className="mt-1 text-xs text-slate-500">{activity.type} · {activity.timestamp}</p>
      {activity.description && (
        <p className="mt-2 text-sm text-slate-400">{activity.description}</p>
      )}
      <p className="mt-2 text-xs text-slate-500">상태: {activity.status}</p>
    </div>
  );
}
