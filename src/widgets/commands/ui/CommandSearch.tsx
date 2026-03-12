type CommandSearchProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function CommandSearch({
  value,
  onChange,
  placeholder = "명령어 검색...",
}: CommandSearchProps) {
  return (
    <input
      type="search"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
    />
  );
}
