import type { Message } from "../../../entities/message/model/types";
import { ChatMessage } from "../../../entities/message/ui/ChatMessage";

type MessageBubbleProps = {
  message: Message;
};

export function MessageBubble({ message }: MessageBubbleProps) {
  return <ChatMessage message={message} />;
}
