import type { PromptItem } from "@/widgets/prompt-library/model/types";
import { PromptCard } from "./PromptCard";

type PromptListProps = {
  prompts: PromptItem[];
  onSelect?: (prompt: PromptItem) => void;
};

export function PromptList({ prompts, onSelect }: PromptListProps) {
  return (
    <div className="space-y-3">
      {prompts.map((prompt) => (
        <PromptCard key={prompt.id} prompt={prompt} onSelect={onSelect} />
      ))}
    </div>
  );
}
