import type { WorkflowItem } from "@/widgets/workflow/model/types";

type WorkflowEditorProps = {
  workflow: WorkflowItem | null;
  onChange?: (workflow: WorkflowItem) => void;
};

export function WorkflowEditor({ workflow }: WorkflowEditorProps) {
  if (!workflow) {
    return (
      <div className="rounded-xl border border-slate-700/80 bg-slate-900/40 p-6 text-center text-sm text-slate-500">
        워크플로우를 선택하거나 새로 만드세요
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
      <h4 className="text-sm font-medium text-slate-300">단계 구성</h4>
      <ol className="mt-3 list-decimal space-y-2 pl-4 text-sm text-slate-400">
        {workflow.steps.map((step) => (
          <li key={step.id}>{step.name}</li>
        ))}
      </ol>
    </div>
  );
}
