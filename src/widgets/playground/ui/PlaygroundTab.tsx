import { useState } from "react";
import { PromptEditor } from "./PromptEditor";
import { ModelSelector } from "./ModelSelector";
import { ParameterPanel } from "./ParameterPanel";
import { ResultViewer } from "./ResultViewer";

export function PlaygroundTab() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState("gpt-4o-mini");
  const [temperature, setTemperature] = useState(0.7);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRun = () => {
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setLoading(false);
      setResult(`[모델: ${model}, temperature: ${temperature}]\n\n"${prompt}"\n\n→ 데모 모드: 위 설정으로 실행된 결과가 여기에 표시됩니다.`);
    }, 600);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Playground</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-400">
                프롬프트
              </label>
              <PromptEditor value={prompt} onChange={setPrompt} />
            </div>
            <div className="flex gap-4">
              <div>
                <label className="mb-1 block text-sm text-slate-400">모델</label>
                <ModelSelector value={model} onChange={setModel} />
              </div>
              <div className="flex-1">
                <ParameterPanel
                  temperature={temperature}
                  onTemperatureChange={setTemperature}
                />
              </div>
            </div>
            <button
              type="button"
              onClick={handleRun}
              className="rounded-xl bg-[var(--color-primary)] px-4 py-2 text-sm font-medium text-[var(--color-selection-text)] hover:opacity-90"
            >
              실행
            </button>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-400">
              결과
            </label>
            <ResultViewer result={result} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
}
