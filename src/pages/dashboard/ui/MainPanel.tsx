import { Activity } from "react";
import type { TabId } from "@/shared/types/tabs";
import { ChatTab } from "@/widgets/chat/ui/ChatTab";
import { SchedulingTab } from "@/widgets/scheduling/ui/SchedulingTab";
import { ContextReplyTab } from "@/widgets/context-reply/ui/ContextReplyTab";
import { PromptLibraryTab } from "@/widgets/prompt-library/ui/PromptLibraryTab";
import { DocumentsTab } from "@/widgets/documents/ui/DocumentsTab";
import { CommandsTab } from "@/widgets/commands/ui/CommandsTab";
import { WorkflowTab } from "@/widgets/workflow/ui/WorkflowTab";
import { PlaygroundTab } from "@/widgets/playground/ui/PlaygroundTab";
import { ActivityTab } from "@/widgets/activity/ui/ActivityTab";
import { SettingsTab } from "@/widgets/settings/ui/SettingsTab";

type MainPanelProps = {
  activeTab: TabId;
};

export function MainPanel({ activeTab }: MainPanelProps) {
  return (
    <main
      className="relative flex flex-1 flex-col overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg)",
        color: "var(--color-text-primary)",
      }}
    >
      <Activity mode={activeTab === "chat" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <ChatTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "scheduling" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <SchedulingTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "context-reply" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <ContextReplyTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "prompt-library" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <PromptLibraryTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "documents" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <DocumentsTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "commands" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <CommandsTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "workflow" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <WorkflowTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "playground" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <PlaygroundTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "activity" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <ActivityTab />
        </div>
      </Activity>
      <Activity mode={activeTab === "settings" ? "visible" : "hidden"}>
        <div className="absolute inset-0 overflow-auto p-4">
          <SettingsTab />
        </div>
      </Activity>
    </main>
  );
}
