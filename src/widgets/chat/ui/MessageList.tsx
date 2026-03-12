import type { RefObject } from "react";
import type { Message } from "@/entities/message";
import type { ScheduleCreatedData } from "./ScheduleCreationBlock";
import { MessageBubble } from "./MessageBubble";
import { ScheduleCreationBlock } from "./ScheduleCreationBlock";

type MessageListProps = {
  messages: Message[];
  listRef: RefObject<HTMLDivElement | null>;
  onScheduleCreated?: (messageId: string, data: ScheduleCreatedData) => void;
};

export function MessageList({
  messages,
  listRef,
  onScheduleCreated,
}: MessageListProps) {
  return (
    <div
      ref={listRef}
      className="flex-1 space-y-4 overflow-y-auto px-5 pb-4 pt-5 scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700/70"
    >
      {messages.map((message) =>
        message.type === "schedule" && onScheduleCreated ? (
          <ScheduleCreationBlock
            key={message.id}
            message={message}
            onScheduleCreated={onScheduleCreated}
          />
        ) : (
          <MessageBubble key={message.id} message={message} />
        ),
      )}
    </div>
  );
}
