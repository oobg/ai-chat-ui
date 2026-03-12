type DocumentUploadProps = {
  onUpload?: (files: FileList | null) => void;
};

export function DocumentUpload({ onUpload }: DocumentUploadProps) {
  return (
    <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-600/80 bg-slate-900/40 py-8 transition hover:border-slate-500 hover:bg-slate-800/40">
      <span className="text-sm text-slate-400">파일을 드래그하거나 클릭하여 업로드</span>
      <input type="file" multiple className="hidden" onChange={(e) => onUpload?.(e.target.files)} />
    </label>
  );
}
