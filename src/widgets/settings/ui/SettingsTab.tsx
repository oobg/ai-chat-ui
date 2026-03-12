import { useState } from "react";
import { ModelSelector } from "./ModelSelector";
import { TemperatureSlider } from "./TemperatureSlider";
import { SystemPromptEditor } from "./SystemPromptEditor";
import { ToggleSettings, type ToggleOption } from "./ToggleSettings";

const INITIAL_TOGGLES: ToggleOption[] = [
  { id: "streaming", label: "스트리밍 응답", value: true },
  { id: "history", label: "대화 기록 저장", value: true },
  { id: "suggestions", label: "제안 표시", value: false },
];

export function SettingsTab() {
  const [model, setModel] = useState("gpt-4o-mini");
  const [temperature, setTemperature] = useState(0.7);
  const [systemPrompt, setSystemPrompt] = useState("");
  const [toggles, setToggles] = useState<ToggleOption[]>(INITIAL_TOGGLES);

  const handleToggle = (id: string, value: boolean) => {
    setToggles((prev) => prev.map((t) => (t.id === id ? { ...t, value } : t)));
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Settings</h2>
        <div className="space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-400">
              기본 모델
            </label>
            <ModelSelector value={model} onChange={setModel} />
          </div>
          <div>
            <TemperatureSlider value={temperature} onChange={setTemperature} />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-400">
              시스템 프롬프트
            </label>
            <SystemPromptEditor value={systemPrompt} onChange={setSystemPrompt} />
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">옵션</h3>
            <ToggleSettings options={toggles} onChange={handleToggle} />
          </div>
        </div>
      </div>
    </div>
  );
}
