type TimePickerProps = {
  value: string;
  onChange: (value: string) => void;
  id?: string;
};

export function TimePicker({ value, onChange, id = "schedule-time" }: TimePickerProps) {
  return (
    <input
      type="time"
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
    />
  );
}
