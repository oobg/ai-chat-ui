export type TabId =
  | "chat"
  | "scheduling"
  | "context-reply"
  | "prompt-library"
  | "documents"
  | "commands"
  | "workflow"
  | "playground"
  | "activity"
  | "settings";

export interface TabMeta {
  id: TabId;
  label: string;
}

export const TABS: TabMeta[] = [
  { id: "chat", label: "Chat" },
  { id: "scheduling", label: "Scheduling" },
  { id: "context-reply", label: "Context Reply" },
  { id: "prompt-library", label: "Prompt Library" },
  { id: "documents", label: "Documents" },
  { id: "commands", label: "Commands" },
  { id: "workflow", label: "Workflow" },
  { id: "playground", label: "Playground" },
  { id: "activity", label: "Activity" },
  { id: "settings", label: "Settings" },
];
