import type { DocumentItem } from "../model/types";

type DocumentListProps = {
  documents: DocumentItem[];
  selectedId?: string | null;
  onSelect?: (doc: DocumentItem) => void;
};

export function DocumentList({ documents, selectedId, onSelect }: DocumentListProps) {
  return (
    <ul className="space-y-1">
      {documents.map((doc) => (
        <li key={doc.id}>
          <button
            type="button"
            onClick={() => onSelect?.(doc)}
            className={`w-full rounded-lg px-3 py-2 text-left text-sm transition ${
              selectedId === doc.id
                ? "bg-slate-700/80 text-slate-100"
                : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
            }`}
          >
            {doc.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
