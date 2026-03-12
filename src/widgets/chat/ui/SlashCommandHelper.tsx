import type { CommandItem } from "@/widgets/commands";

type SlashCommandHelperProps = {
  commands: CommandItem[];
  highlightedIndex: number;
  onSelect: (command: CommandItem) => void;
};

export function SlashCommandHelper({
  commands,
  highlightedIndex,
  onSelect,
}: SlashCommandHelperProps) {
  if (commands.length === 0) return null;

  return (
    <div
      className="absolute bottom-full left-0 right-0 z-10 mb-1.5 max-h-56 overflow-auto rounded-xl border border-slate-700/80 bg-slate-900/95 py-1.5 shadow-lg backdrop-blur-sm"
      role="listbox"
      aria-label="명령어 추천"
      aria-activedescendant={commands[highlightedIndex]?.id}
    >
      <ul className="space-y-0.5">
        {commands.map((command, index) => (
          <li
            key={command.id}
            role="option"
            aria-selected={index === highlightedIndex}
            id={command.id}
          >
            <button
              type="button"
              tabIndex={-1}
              onClick={() => onSelect(command)}
              className={`flex w-full flex-col gap-0.5 px-3 py-2 text-left transition focus:outline-none focus:ring-0 ${
                index === highlightedIndex
                  ? "bg-slate-800/90 text-slate-100"
                  : "hover:bg-slate-800/80"
              }`}
            >
              <code className="text-sm font-medium text-[var(--color-primary-muted)]">
                {command.command}
              </code>
              <span className="text-xs text-slate-400">{command.description}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
