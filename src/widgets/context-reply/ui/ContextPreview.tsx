import type { ContextItem } from "../model/types";

type ContextPreviewProps = {
  context: ContextItem;
};

export function ContextPreview({ context }: ContextPreviewProps) {
  return (
    <div className="rounded-lg border border-slate-700/80 bg-slate-800/50 p-3">
      <span className="text-[0.65rem] font-medium uppercase tracking-wider text-slate-500">
        {context.type}
      </span>
      <p className="mt-1 line-clamp-2 text-sm text-slate-200">{context.preview}</p>
    </div>
  );
}
