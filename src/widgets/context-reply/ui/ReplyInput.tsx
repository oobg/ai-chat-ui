type ReplyInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function ReplyInput({
  value,
  onChange,
  placeholder = "이 요소에 대해 질문하거나 요청을 입력하세요.",
}: ReplyInputProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={3}
      className="w-full resize-none rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
    />
  );
}
