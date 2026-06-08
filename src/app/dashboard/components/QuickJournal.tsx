import React from "react";

interface QuickJournalProps {
  entry: string;
  onChange: (val: string) => void;
  onSave: (e: React.FormEvent) => void;
}

export function QuickJournal({ entry, onChange, onSave }: QuickJournalProps) {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] tracking-[1px] uppercase text-zinc-500 font-bold">
          REFLECTION
        </span>
        <h2 className="text-2xl font-bold font-manrope text-zinc-800">
          Quick Journal
        </h2>
      </div>

      <form
        onSubmit={onSave}
        className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col p-8 gap-6 group hover:shadow-[0px_12px_32px_rgba(25,28,29,0.08)] transition-all"
      >
        <label htmlFor="dashboard-journal" className="sr-only">
          Journal entry
        </label>
        <textarea
          id="dashboard-journal"
          value={entry}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-zinc-700 font-medium bg-transparent resize-none outline-none focus:ring-0 placeholder:text-zinc-400 placeholder:font-normal leading-relaxed"
          placeholder="How are you feeling today? What's on your mind?"
          rows={2}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100">
          <span className="text-xs text-zinc-500 font-medium">
            Last entry: 1 day ago
          </span>
          <button
            type="submit"
            disabled={!entry.trim()}
            aria-disabled={!entry.trim()}
            title={entry.trim() ? undefined : "Write something first"}
            className="bg-linear-to-br from-[#002d1c] to-[#00452e] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-[0px_4px_12px_rgba(0,45,28,0.2)] hover:shadow-[0px_6px_16px_rgba(0,45,28,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0px_4px_12px_rgba(0,45,28,0.2)]"
          >
            Save Entry
          </button>
        </div>
      </form>
    </div>
  );
}
