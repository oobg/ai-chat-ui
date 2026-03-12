import type { WorkflowItem } from "../model/types";

type WorkflowCardProps = {
  workflow: WorkflowItem;
  onSelect?: (workflow: WorkflowItem) => void;
};

export function WorkflowCard({ workflow, onSelect }: WorkflowCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(workflow)}
      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/60 p-4 text-left transition hover:border-slate-600 hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
    >
      <h4 className="font-medium text-slate-100">{workflow.name}</h4>
      <p className="mt-1 text-xs text-slate-500">
        {workflow.steps.length}개 단계
      </p>
    </button>
  );
}
