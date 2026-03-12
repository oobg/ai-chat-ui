import type { Message } from "@/entities/message";
import { ChatMessage } from "@/entities/message";

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  return <ChatMessage message={message} />;
}
