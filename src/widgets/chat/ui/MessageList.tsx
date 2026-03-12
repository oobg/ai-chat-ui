import type { RefObject } from "react";
import type { Message } from "../../../entities/message/model/types";
import { MessageBubble } from "./MessageBubble";

type MessageListProps = {
  messages: Message[];
  listRef: RefObject<HTMLDivElement | null>;
};

export function MessageList({ messages, listRef }: MessageListProps) {
  return (
    <div
      ref={listRef}
      className="flex-1 space-y-4 overflow-y-auto px-5 pb-4 pt-5 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700/70"
    >
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
}
