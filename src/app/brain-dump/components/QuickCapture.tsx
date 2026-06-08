import React from "react";
import { Plus } from "lucide-react";

interface QuickCaptureProps {
  value: string;
  onChange: (val: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onAdd: () => void;
}

export function QuickCapture({
  value,
  onChange,
  onKeyDown,
  onAdd,
}: QuickCaptureProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="flex-1 relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="What's on your mind? Press Enter to add..."
            className="w-full h-12 bg-white border border-zinc-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1a5f49]/20 focus:border-[#1a5f49] transition-all"
          />
        </div>
        <button
          type="button"
          onClick={onAdd}
          className="bg-[#1a5f49] hover:bg-[#154a39] text-white h-12 px-6 rounded-xl text-sm font-bold shadow-[0px_4px_12px_rgba(26,95,73,0.1)] transition-all flex items-center gap-2 shrink-0"
        >
          <Plus className="w-5 h-5" />
          Add
        </button>
      </div>
    </div>
  );
}
