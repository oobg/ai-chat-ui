import { useMemo, useState } from "react";
import type { CommandItem } from "../model/types";
import { CommandList } from "./CommandList";
import { CommandSearch } from "./CommandSearch";

const MOCK_COMMANDS: CommandItem[] = [
  {
    id: "1",
    command: "/summarize",
    description: "선택한 내용을 요약합니다.",
    example: "채팅에 삽입 가능",
  },
  {
    id: "2",
    command: "/translate",
    description: "선택한 내용을 번역합니다.",
    example: "채팅에 삽입 가능",
  },
  {
    id: "3",
    command: "/explain",
    description: "선택한 내용을 설명합니다.",
    example: "채팅에 삽입 가능",
  },
  {
    id: "4",
    command: "/schedule",
    description: "일정 생성 프롬프트를 삽입합니다.",
    example: "채팅에 삽입 가능",
  },
];

export function CommandsTab() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return MOCK_COMMANDS;
    const q = search.toLowerCase();
    return MOCK_COMMANDS.filter(
      (c) => c.command.toLowerCase().includes(q) || c.description.toLowerCase().includes(q),
    );
  }, [search]);

  const handleSelect = (command: CommandItem) => {
    // 채팅 입력창에 삽입 가능한 인터페이스만 제공
    console.info("Insert command:", command.command);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Commands</h2>
        <div className="mb-4">
          <CommandSearch value={search} onChange={setSearch} />
        </div>
        <CommandList commands={filtered} onSelect={handleSelect} />
      </div>
    </div>
  );
}
