import type { ContextItem } from "@/widgets/context-reply/model/types";
import { ContextPreview } from "./ContextPreview";

type ContextCardProps = {
  context: ContextItem;
};

export function ContextCard({ context }: ContextCardProps) {
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
      <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        선택된 요소
      </h3>
      <ContextPreview context={context} />
    </div>
  );
}
