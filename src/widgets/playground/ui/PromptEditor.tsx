type PlaygroundPromptEditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export function PromptEditor({ value, onChange }: PlaygroundPromptEditorProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="프롬프트를 입력하세요..."
      rows={6}
      className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 font-mono text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
    />
  );
}
