export type MessageStatus = "completed_unread" | "in_progress" | "completed_read";

export type MessageRole = "user" | "assistant";

export type SchedulePayload = {
  status: "editing" | "created";
  title?: string;
  date?: string;
  time?: string;
  memo?: string;
};

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  status?: MessageStatus;
  createdAt?: string;
  type?: "text" | "schedule";
  schedulePayload?: SchedulePayload;
}
