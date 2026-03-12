export interface WorkflowStep {
  id: string;
  name: string;
  order: number;
}

export interface WorkflowItem {
  id: string;
  name: string;
  steps: WorkflowStep[];
  createdAt?: string;
}
