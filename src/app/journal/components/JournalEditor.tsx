import { useState } from "react";
import { Image as ImageIcon, Mic, Link as LinkIcon } from "lucide-react";

interface JournalEditorProps {
  onAddEntry?: (text: string) => void;
  onInsertImage?: () => void;
  onStartRecording?: () => void;
  onAddLink?: () => void;
}

export function JournalEditor({
  onAddEntry,
  onInsertImage,
  onStartRecording,
  onAddLink,
}: JournalEditorProps) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    if (onAddEntry) {
      onAddEntry(text);
    }
    setText("");
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_48px_rgba(25,28,29,0.06)] transition-all">
      <label htmlFor="journal-entry" className="sr-only">
        Journal entry
      </label>
      <textarea
        id="journal-entry"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full text-zinc-700 font-medium bg-transparent resize-none outline-none focus:ring-0 placeholder:text-zinc-400 placeholder:font-normal leading-relaxed text-base min-h-[120px]"
        placeholder="Write your thoughts... Use **markdown** for formatting"
      />

      <div className="flex items-center justify-between pt-5 border-t border-zinc-50">
        <div className="flex items-center gap-2">
          <button
            onClick={onInsertImage}
            type="button"
            aria-label="Insert image"
            className="p-2.5 rounded-xl hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-all focus:outline-hidden"
          >
            <ImageIcon className="w-5 h-5" />
          </button>
          <button
            onClick={onStartRecording}
            type="button"
            aria-label="Start recording"
            className="p-2.5 rounded-xl hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-all focus:outline-hidden"
          >
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={onAddLink}
            type="button"
            aria-label="Add link"
            className="p-2.5 rounded-xl hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-all focus:outline-hidden"
          >
            <LinkIcon className="w-5 h-5" />
          </button>
        </div>

        <button
          onClick={handleSubmit}
          type="button"
          className="bg-[#1a5f49] hover:bg-[#154a39] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-[0px_4px_12px_rgba(26,95,73,0.15)] hover:shadow-[0px_6px_16px_rgba(26,95,73,0.25)] hover:-translate-y-0.5 transition-all focus:outline-hidden"
        >
          Add Entry
        </button>
      </div>
    </div>
  );
}
