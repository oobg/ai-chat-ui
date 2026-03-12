type TemperatureSliderProps = {
  value: number;
  onChange: (value: number) => void;
};

export function TemperatureSlider({ value, onChange }: TemperatureSliderProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-slate-400">Temperature</span>
        <span className="text-slate-200">{value}</span>
      </div>
      <input
        type="range"
        min={0}
        max={2}
        step={0.1}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-[var(--color-primary)]"
      />
    </div>
  );
}
