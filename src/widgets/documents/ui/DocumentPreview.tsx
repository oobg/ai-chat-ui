import type { DocumentItem } from "../model/types";

type DocumentPreviewProps = {
  document: DocumentItem | null;
};

export function DocumentPreview({ document: doc }: DocumentPreviewProps) {
  if (!doc) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl border border-slate-700/80 bg-slate-900/40 text-sm text-slate-500">
        문서를 선택하세요
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/40 p-4">
      <h4 className="text-sm font-medium text-slate-200">{doc.name}</h4>
      <p className="mt-2 text-xs text-slate-500">
        미리보기 (데모): 문서 기반 질의를 위해 업로드된 파일입니다.
      </p>
    </div>
  );
}
