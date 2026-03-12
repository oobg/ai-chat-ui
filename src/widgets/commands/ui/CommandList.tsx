import type { CommandItem } from "@/widgets/commands/model/types";
import { CommandCard } from "./CommandCard";

type CommandListProps = {
  commands: CommandItem[];
  onSelect?: (command: CommandItem) => void;
};

export function CommandList({ commands, onSelect }: CommandListProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {commands.map((cmd) => (
        <CommandCard key={cmd.id} command={cmd} onSelect={onSelect} />
      ))}
    </div>
  );
}
