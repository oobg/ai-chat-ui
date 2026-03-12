import { useCallback, useState } from "react";
import type { Message } from "@/entities/message/model/types";

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: createId(),
    role: "assistant",
    content: "무엇을 도와드릴까요? 오른쪽 아래 입력창에 요청을 적어보세요.",
    status: "completed_read",
  },
];

export function useChatMessages() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");

  const sendMessage = useCallback((trimmed: string) => {
    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
      status: "completed_read",
    };

    const assistantId = createId();
    const assistantPlaceholder: Message = {
      id: assistantId,
      role: "assistant",
      content: "",
      status: "in_progress",
    };

    setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
    setInput("");

    window.setTimeout(() => {
      setMessages((prev) =>
        prev.map((message) =>
          message.id === assistantId
            ? {
                ...message,
                content: `"${trimmed}" 요청을 받았어요.\n지금은 데모 모드라 실제 호출 대신 이렇게 응답 상태만 보여줍니다.`,
                status: "completed_unread",
              }
            : message,
        ),
      );
    }, 900);
  }, []);

  const markAllRead = useCallback(() => {
    setMessages((prev) =>
      prev.map((message) =>
        message.role === "assistant" && message.status === "completed_unread"
          ? { ...message, status: "completed_read" }
          : message,
      ),
    );
  }, []);

  return {
    messages,
    input,
    setInput,
    sendMessage,
    markAllRead,
  };
}
