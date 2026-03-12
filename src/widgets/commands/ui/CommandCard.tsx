import type { CommandItem } from "../model/types";

type CommandCardProps = {
  command: CommandItem;
  onSelect?: (command: CommandItem) => void;
};

export function CommandCard({ command, onSelect }: CommandCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect?.(command)}
      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/60 p-4 text-left transition hover:border-slate-600 hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
    >
      <code className="text-sm font-medium text-[var(--color-primary-muted)]">
        {command.command}
      </code>
      <p className="mt-1 text-sm text-slate-400">{command.description}</p>
      {command.example && <p className="mt-1 text-xs text-slate-500">{command.example}</p>}
    </button>
  );
}
