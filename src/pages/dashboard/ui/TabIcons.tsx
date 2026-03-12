import type { TabId } from "@/shared";
import {
  ActivityIcon,
  BookIcon,
  CalendarIcon,
  ChatIcon,
  CommandIcon,
  FileIcon,
  PlayIcon,
  ReplyIcon,
  SettingsIcon,
  WorkflowIcon,
} from "./TabIconComponents";

const iconMap: Record<TabId, React.ReactNode> = {
  chat: <ChatIcon />,
  scheduling: <CalendarIcon />,
  "context-reply": <ReplyIcon />,
  "prompt-library": <BookIcon />,
  documents: <FileIcon />,
  commands: <CommandIcon />,
  workflow: <WorkflowIcon />,
  playground: <PlayIcon />,
  activity: <ActivityIcon />,
  settings: <SettingsIcon />,
};

export function getTabIcon(id: TabId): React.ReactNode {
  return iconMap[id];
}
