export type MessageStatus = "completed_unread" | "in_progress" | "completed_read";

export type MessageRole = "user" | "assistant";

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  status?: MessageStatus;
  createdAt?: string;
}
