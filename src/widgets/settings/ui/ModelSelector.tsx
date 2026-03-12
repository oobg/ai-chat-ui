const MODELS = ["gpt-4o", "gpt-4o-mini", "claude-3-5-sonnet", "gemini-1.5-pro"];

type SettingsModelSelectorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function ModelSelector({ value, onChange }: SettingsModelSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
    >
      {MODELS.map((m) => (
        <option key={m} value={m}>
          {m}
        </option>
      ))}
    </select>
  );
}
