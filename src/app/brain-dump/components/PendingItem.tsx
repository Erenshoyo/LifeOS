import React from "react";
import { Clock, ArrowUpRight, CheckCircle2, MoreHorizontal } from "lucide-react";

export interface BrainDumpItem {
  id: number;
  text: string;
  time: string;
}

interface PendingItemProps {
  item: BrainDumpItem;
  onConvert?: (id: number) => void;
  onProcess?: (id: number) => void;
  onMore?: (id: number) => void;
}

export function PendingItem({
  item,
  onConvert,
  onProcess,
  onMore,
}: PendingItemProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] border border-zinc-100 flex items-start justify-between group hover:shadow-[0px_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all">
      <div className="flex flex-col gap-2">
        <p className="text-[15px] font-semibold text-zinc-900 leading-relaxed">
          {item.text}
        </p>
        <div className="flex items-center gap-1.5 text-zinc-400">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium tracking-tight">
            {item.time}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onConvert?.(item.id)}
          className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-[#1a5f49] transition-colors"
          title="Convert to Task"
        >
          <ArrowUpRight className="w-5 h-5" />
        </button>
        <button
          onClick={() => onProcess?.(item.id)}
          className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-emerald-500 transition-colors"
          title="Mark Processed"
        >
          <CheckCircle2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => onMore?.(item.id)}
          className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-zinc-600 transition-colors"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
