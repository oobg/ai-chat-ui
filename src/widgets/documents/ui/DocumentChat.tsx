import { useState } from "react";

type DocumentChatProps = {
  documentId: string | null;
};

export function DocumentChat({ documentId }: DocumentChatProps) {
  const [question, setQuestion] = useState("");

  if (!documentId) return null;

  return (
    <div className="mt-4 space-y-2">
      <label className="block text-sm font-medium text-slate-400">이 문서에 대해 질문하기</label>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="질문을 입력하세요..."
        rows={2}
        className="w-full rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[var(--color-primary)]"
      />
      <button
        type="button"
        className="rounded-lg bg-slate-700/80 px-3 py-1.5 text-sm text-slate-200 hover:bg-slate-600/80"
      >
        질문 전송
      </button>
    </div>
  );
}
