import { useState } from "react";
import type { ScheduleFormState } from "../model/types";
import { ScheduleForm } from "./ScheduleForm";
import { ScheduleSummary } from "./ScheduleSummary";

const initialSchedule: ScheduleFormState = {
  title: "",
  date: "",
  time: "",
  repeat: false,
};

export function SchedulingTab() {
  const [schedule, setSchedule] = useState<ScheduleFormState>(initialSchedule);
  const [submitted, setSubmitted] = useState<ScheduleFormState | null>(null);

  const handleSubmit = () => {
    setSubmitted({ ...schedule });
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">일정 생성</h2>
        <ScheduleForm
          value={schedule}
          onChange={setSchedule}
          onSubmit={handleSubmit}
        />
      </div>
      {submitted && (
        <ScheduleSummary schedule={submitted} />
      )}
    </div>
  );
}
