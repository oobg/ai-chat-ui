import type { PromptItem } from "@/widgets/prompt-library/model/types";

type PromptCardProps = {
  prompt: PromptItem;
  onSelect?: (prompt: PromptItem) => void;
};

export function PromptCard({ prompt, onSelect }: PromptCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(prompt)}
      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/60 p-4 text-left transition hover:border-slate-600 hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
    >
      <h4 className="font-medium text-slate-100">{prompt.title}</h4>
      {prompt.category && (
        <span className="mt-1 inline-block text-xs text-slate-500">{prompt.category}</span>
      )}
      <p className="mt-2 line-clamp-2 text-sm text-slate-400">{prompt.body}</p>
    </button>
  );
}
