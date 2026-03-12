type SendButtonProps = {
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
};

export function SendButton({
  disabled = false,
  onClick,
  children = "보내기",
}: SendButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="inline-flex h-10 items-center justify-center rounded-2xl px-4 text-sm font-semibold shadow-lg transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-selection-text)",
        boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3)",
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
