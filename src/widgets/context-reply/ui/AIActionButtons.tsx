type AIActionButtonsProps = {
  onSummarize?: () => void;
  onExplain?: () => void;
  onTranslate?: () => void;
};

export function AIActionButtons({
  onSummarize,
  onExplain,
  onTranslate,
}: AIActionButtonsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={onSummarize}
        className="rounded-lg border border-slate-600/80 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700/80"
      >
        요약
      </button>
      <button
        type="button"
        onClick={onExplain}
        className="rounded-lg border border-slate-600/80 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700/80"
      >
        설명
      </button>
      <button
        type="button"
        onClick={onTranslate}
        className="rounded-lg border border-slate-600/80 bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700/80"
      >
        번역
      </button>
    </div>
  );
}
