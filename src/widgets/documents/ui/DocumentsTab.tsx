import { useState } from "react";
import type { DocumentItem } from "../model/types";
import { DocumentUpload } from "./DocumentUpload";
import { DocumentList } from "./DocumentList";
import { DocumentPreview } from "./DocumentPreview";
import { DocumentChat } from "./DocumentChat";

const MOCK_DOCS: DocumentItem[] = [
  { id: "1", name: "프로젝트 개요.pdf", uploadedAt: "2025-03-10" },
  { id: "2", name: "API 명세.docx", uploadedAt: "2025-03-11" },
];

export function DocumentsTab() {
  const [documents, setDocuments] = useState<DocumentItem[]>(MOCK_DOCS);
  const [selected, setSelected] = useState<DocumentItem | null>(null);

  const handleUpload = (files: FileList | null) => {
    if (!files?.length) return;
    const newDocs: DocumentItem[] = Array.from(files).map((f, i) => ({
      id: `new-${Date.now()}-${i}`,
      name: f.name,
    }));
    setDocuments((prev) => [...prev, ...newDocs]);
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6">
        <h2 className="mb-4 text-lg font-semibold text-slate-100">Documents</h2>
        <div className="mb-4">
          <DocumentUpload onUpload={handleUpload} />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-sm font-medium text-slate-400">문서 목록</h3>
            <DocumentList
              documents={documents}
              selectedId={selected?.id}
              onSelect={setSelected}
            />
          </div>
          <div className="md:col-span-2">
            <h3 className="mb-3 text-sm font-medium text-slate-400">미리보기</h3>
            <DocumentPreview document={selected} />
            <DocumentChat documentId={selected?.id ?? null} />
          </div>
        </div>
      </div>
    </div>
  );
}
