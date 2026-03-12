import { useState } from "react";
import { ContextCard } from "./ContextCard";
import { ReplyInput } from "./ReplyInput";
import { AIActionButtons } from "./AIActionButtons";

const MOCK_CONTEXT = {
  id: "1",
  type: "문서 단락",
  preview:
    "AI 어시스턴트 대시보드는 React 19.2와 TypeScript 기반으로 구현됩니다. 좌측 사이드바와 우측 메인 패널 레이아웃을 가지며, 탭 전환 시 컴포넌트 state를 유지합니다.",
};

export function ContextReplyTab() {
  const [draft, setDraft] = useState("");

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Context Reply</h2>
        <ContextCard context={MOCK_CONTEXT} />
        <div className="mt-4">
          <label className="mb-2 block text-sm font-medium text-slate-400">답신 내용</label>
          <ReplyInput value={draft} onChange={setDraft} />
        </div>
        <div className="mt-3">
          <AIActionButtons />
        </div>
      </div>
    </div>
  );
}
