type ResultViewerProps = {
  result: string | null;
  loading?: boolean;
};

export function ResultViewer({ result, loading }: ResultViewerProps) {
  if (loading) {
    return (
      <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
        <p className="text-sm text-slate-500">생성 중...</p>
      </div>
    );
  }
  if (!result) {
    return (
      <div className="rounded-xl border border-slate-700/80 bg-slate-900/40 p-4 text-sm text-slate-500">
        결과가 여기에 표시됩니다
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-slate-700/80 bg-slate-900/60 p-4">
      <pre className="whitespace-pre-wrap text-sm text-slate-200">{result}</pre>
    </div>
  );
}
