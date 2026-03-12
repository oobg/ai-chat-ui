import type { ScheduleFormState } from "../model/types";
import { DatePicker } from "./DatePicker";
import { TimePicker } from "./TimePicker";

type ScheduleFormProps = {
  value: ScheduleFormState;
  onChange: (value: ScheduleFormState) => void;
  onSubmit: () => void;
};

export function ScheduleForm({ value, onChange, onSubmit }: ScheduleFormProps) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="space-y-4"
    >
      <div>
        <label htmlFor="schedule-title" className="mb-1.5 block text-sm font-medium text-slate-400">
          제목
        </label>
        <input
          id="schedule-title"
          type="text"
          value={value.title}
          onChange={(e) => onChange({ ...value, title: e.target.value })}
          placeholder="일정 제목"
          className="w-full rounded-xl border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)]"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="schedule-date"
            className="mb-1.5 block text-sm font-medium text-slate-400"
          >
            날짜
          </label>
          <DatePicker value={value.date} onChange={(date) => onChange({ ...value, date })} />
        </div>
        <div>
          <label
            htmlFor="schedule-time"
            className="mb-1.5 block text-sm font-medium text-slate-400"
          >
            시간
          </label>
          <TimePicker value={value.time} onChange={(time) => onChange({ ...value, time })} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          id="schedule-repeat"
          type="checkbox"
          checked={value.repeat}
          onChange={(e) => onChange({ ...value, repeat: e.target.checked })}
          className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
        />
        <label htmlFor="schedule-repeat" className="text-sm text-slate-300">
          반복
        </label>
      </div>
      <button
        type="submit"
        className="rounded-xl border border-slate-700/80 bg-slate-800/80 px-4 py-2 text-sm font-medium text-slate-100 transition hover:bg-slate-700/80 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
      >
        일정 생성
      </button>
    </form>
  );
}
