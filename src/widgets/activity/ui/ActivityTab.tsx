import { useMemo, useState } from "react";
import type { ActivityRecord, ActivityType } from "../model/types";
import { ActivityList } from "./ActivityList";
import { ActivityDetail } from "./ActivityDetail";
import { ActivityFilter } from "./ActivityFilter";

const MOCK_ACTIVITIES: ActivityRecord[] = [
  {
    id: "1",
    type: "workflow",
    title: "요약 후 이메일 작성",
    timestamp: "2025-03-12 10:00",
    status: "success",
    description: "워크플로우 실행 완료",
  },
  {
    id: "2",
    type: "agent",
    title: "문서 분석 에이전트",
    timestamp: "2025-03-12 09:45",
    status: "success",
  },
  {
    id: "3",
    type: "chat",
    title: "채팅 요청 처리",
    timestamp: "2025-03-12 09:30",
    status: "success",
  },
  {
    id: "4",
    type: "command",
    title: "/summarize 실행",
    timestamp: "2025-03-12 09:15",
    status: "success",
  },
];

export function ActivityTab() {
  const [filter, setFilter] = useState<ActivityType | "all">("all");
  const [selected, setSelected] = useState<ActivityRecord | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return MOCK_ACTIVITIES;
    return MOCK_ACTIVITIES.filter((a) => a.type === filter);
  }, [filter]);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Activity</h2>
        <div className="mb-4">
          <ActivityFilter value={filter} onChange={setFilter} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">기록</h3>
            <ActivityList activities={filtered} onSelect={setSelected} />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">상세</h3>
            <ActivityDetail activity={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}
