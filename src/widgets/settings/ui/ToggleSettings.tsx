export interface ToggleOption {
  id: string;
  label: string;
  value: boolean;
}

type ToggleSettingsProps = {
  options: ToggleOption[];
  onChange: (id: string, value: boolean) => void;
};

export function ToggleSettings({ options, onChange }: ToggleSettingsProps) {
  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <div key={opt.id} className="flex items-center justify-between">
          <label htmlFor={opt.id} className="text-sm text-slate-300">
            {opt.label}
          </label>
          <button
            type="button"
            id={opt.id}
            role="switch"
            aria-checked={opt.value}
            onClick={() => onChange(opt.id, !opt.value)}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 focus:ring-offset-slate-950 ${
              opt.value ? "bg-[var(--color-primary)]" : "bg-slate-700"
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ${
                opt.value ? "translate-x-5" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      ))}
    </div>
  );
}
