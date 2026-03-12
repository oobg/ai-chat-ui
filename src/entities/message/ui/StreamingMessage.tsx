export function StreamingMessage() {
  return (
    <div className="relative flex max-w-xl flex-col gap-1">
      <div className="inline-flex items-end gap-2">
        <div className="rounded-2xl bg-slate-800/90 px-4 py-3 text-sm text-slate-50 shadow-md ring-1 ring-slate-700/60">
          <div className="mb-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-400">
            AI 생성 중
          </div>
          <div className="flex items-center gap-1.5 text-slate-200">
            <span className="inline-block h-[0.8em] w-[7ch] rounded bg-slate-700/80" />
            <span className="inline-flex h-4 items-center gap-1">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.05s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-slate-400 [animation-delay:0.2s]" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
