import { useState } from "react";
import type { WorkflowItem } from "../model/types";
import { WorkflowList } from "./WorkflowList";
import { WorkflowEditor } from "./WorkflowEditor";
import { WorkflowRunner } from "./WorkflowRunner";

const MOCK_WORKFLOWS: WorkflowItem[] = [
  {
    id: "1",
    name: "요약 후 이메일 작성",
    steps: [
      { id: "s1", name: "문서 요약", order: 1 },
      { id: "s2", name: "이메일 초안 생성", order: 2 },
    ],
  },
  {
    id: "2",
    name: "번역 및 검토",
    steps: [
      { id: "s1", name: "텍스트 번역", order: 1 },
      { id: "s2", name: "문법 검토", order: 2 },
    ],
  },
];

export function WorkflowTab() {
  const [workflows] = useState<WorkflowItem[]>(MOCK_WORKFLOWS);
  const [selected, setSelected] = useState<WorkflowItem | null>(null);

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Workflow</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">워크플로우 목록</h3>
            <WorkflowList workflows={workflows} onSelect={setSelected} />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">편집</h3>
            <WorkflowEditor workflow={selected} />
            <WorkflowRunner workflow={selected} />
          </div>
        </div>
      </div>
    </div>
  );
}
