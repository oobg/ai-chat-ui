import type { ActivityType } from "@/widgets/activity/model/types";

const TYPES: { value: ActivityType | "all"; label: string }[] = [
  { value: "all", label: "전체" },
  { value: "workflow", label: "Workflow" },
  { value: "agent", label: "Agent" },
  { value: "chat", label: "Chat" },
  { value: "command", label: "Command" },
];

type ActivityFilterProps = {
  value: ActivityType | "all";
  onChange: (value: ActivityType | "all") => void;
};

export function ActivityFilter({ value, onChange }: ActivityFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {TYPES.map((t) => (
        <button
          key={t.value}
          type="button"
          onClick={() => onChange(t.value)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
            value === t.value
              ? "bg-slate-700 text-slate-100"
              : "bg-slate-800/60 text-slate-400 hover:text-slate-200"
          }`}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
