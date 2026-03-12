type SystemPromptEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SystemPromptEditor({ value, onChange }: SystemPromptEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="시스템 프롬프트 (선택)"
      rows={4}
      className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
    />
  );
}
