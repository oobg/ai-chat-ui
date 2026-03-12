import { useState } from "react";
import type { WorkflowItem } from "../model/types";

type WorkflowRunnerProps = {
  workflow: WorkflowItem | null;
};

export function WorkflowRunner({ workflow }: WorkflowRunnerProps) {
  const [running, setRunning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleRun = () => {
    if (!workflow) return;
    setRunning(true);
    setResult(null);
    setTimeout(() => {
      setRunning(false);
      setResult(`"${workflow.name}" 실행 완료 (mock)`);
    }, 800);
  };

  if (!workflow) return null;

  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={handleRun}
        disabled={running}
        className="rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-selection-text)] transition hover:opacity-90 disabled:opacity-50"
      >
        {running ? "실행 중..." : "실행"}
      </button>
      {result && <p className="mt-2 text-sm text-slate-400">{result}</p>}
    </div>
  );
}
