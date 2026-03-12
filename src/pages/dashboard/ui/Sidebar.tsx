import type { TabId } from "../../../shared/types/tabs";
import { TABS } from "../../../shared/types/tabs";
import { getTabIcon } from "./TabIcons";

type SidebarProps = {
  activeTab: TabId;
  onTabChange: (id: TabId) => void;
};

export function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  return (
    <aside
      className="flex w-60 shrink-0 flex-col border-r border-slate-800/80 bg-slate-950/90"
      style={{ color: "var(--color-text-primary)" }}
    >
      <div className="px-3 py-4">
        <h2 className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          AI Assistant
        </h2>
        <nav className="flex flex-col gap-0.5">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onTabChange(tab.id)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                  isActive
                    ? "bg-slate-800/90 text-slate-100 ring-1 ring-[var(--color-primary-muted)]/50"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                }`}
              >
                {getTabIcon(tab.id)}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
