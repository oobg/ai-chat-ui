type PromptEditorProps = {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
};

export function PromptEditor({ value, onChange, readOnly = false }: PromptEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
      rows={6}
      className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 font-mono text-sm text-slate-100 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] read-only:opacity-80"
    />
  );
}
