import { useState } from "react";
import type { TabId } from "../../../shared/types/tabs";
import { Sidebar } from "./Sidebar";
import { MainPanel } from "./MainPanel";

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>("chat");

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <MainPanel activeTab={activeTab} />
    </div>
  );
}
