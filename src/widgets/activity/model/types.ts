export type ActivityType = "workflow" | "agent" | "chat" | "command";

export interface ActivityRecord {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  timestamp: string;
  status: "success" | "running" | "failed";
}
