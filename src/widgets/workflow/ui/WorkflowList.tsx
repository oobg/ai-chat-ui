import type { WorkflowItem } from "../model/types";
import { WorkflowCard } from "./WorkflowCard";

type WorkflowListProps = {
  workflows: WorkflowItem[];
  onSelect?: (workflow: WorkflowItem) => void;
};

export function WorkflowList({ workflows, onSelect }: WorkflowListProps) {
  return (
    <div className="space-y-3">
      {workflows.map((w) => (
        <WorkflowCard key={w.id} workflow={w} onSelect={onSelect} />
      ))}
    </div>
  );
}
