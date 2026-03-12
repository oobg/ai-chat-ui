type ChatInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
  disabled?: boolean;
};

export function ChatInput({
  value,
  onChange,
  onSubmit,
  placeholder = "무엇이든 물어보세요. 엔터로 전송, Shift+Enter로 줄바꿈.",
  disabled = false,
}: ChatInputProps) {
  return (
    <textarea
      rows={1}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
      className="block w-full resize-none rounded-2xl border border-slate-700/80 bg-slate-950/90 px-3.5 py-2.5 text-sm text-slate-100 shadow-sm outline-none ring-0 placeholder:text-slate-500 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)] disabled:opacity-60"
      onKeyDown={(event) => {
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
          onSubmit();
        }
      }}
    />
  );
}
