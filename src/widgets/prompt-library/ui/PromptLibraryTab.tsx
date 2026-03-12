import { useMemo, useState } from "react";
import type { PromptItem } from "../model/types";
import { PromptList } from "./PromptList";
import { PromptSearch } from "./PromptSearch";
import { PromptEditor } from "./PromptEditor";

const MOCK_PROMPTS: PromptItem[] = [
  { id: "1", title: "요약하기", body: "다음 내용을 3문장 이내로 요약해 주세요.", category: "요약" },
  { id: "2", title: "번역하기", body: "다음 텍스트를 자연스러운 한국어로 번역해 주세요.", category: "번역" },
  { id: "3", title: "코드 설명", body: "아래 코드가 하는 일을 단계별로 설명해 주세요.", category: "개발" },
  { id: "4", title: "이메일 초안", body: "다음 요점을 바탕으로 전문적인 이메일 초안을 작성해 주세요.", category: "작성" },
];

export function PromptLibraryTab() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<PromptItem | null>(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return MOCK_PROMPTS;
    const q = search.toLowerCase();
    return MOCK_PROMPTS.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.body.toLowerCase().includes(q) ||
        (p.category && p.category.toLowerCase().includes(q)),
    );
  }, [search]);

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Prompt Library</h2>
        <div className="mb-4">
          <PromptSearch value={search} onChange={setSearch} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">목록</h3>
            <PromptList prompts={filtered} onSelect={setSelected} />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">
              {selected ? "선택된 프롬프트 (채팅에 삽입 가능)" : "미리보기"}
            </h3>
            <PromptEditor
              value={selected?.body ?? ""}
              onChange={() => {}}
              readOnly={!!selected}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
