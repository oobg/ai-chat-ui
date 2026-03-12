type ParameterPanelProps = {
  temperature: number;
  onTemperatureChange: (v: number) => void;
};

export function ParameterPanel({ temperature, onTemperatureChange }: ParameterPanelProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-400">Temperature: {temperature}</label>
      <input
        type="range"
        min={0}
        max={2}
        step={0.1}
        value={temperature}
        onChange={(e) => onTemperatureChange(Number(e.target.value))}
        className="w-full accent-[var(--color-primary)]"
      />
    </div>
  );
}
