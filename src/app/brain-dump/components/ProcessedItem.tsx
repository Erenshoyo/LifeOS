import React from "react";
import { Clock, Trash2 } from "lucide-react";
import { BrainDumpItem } from "./PendingItem";

interface ProcessedItemProps {
  item: BrainDumpItem;
  onDelete?: (id: number) => void;
}

export function ProcessedItem({ item, onDelete }: ProcessedItemProps) {
  return (
    <div className="bg-white/60 backdrop-blur-[2px] rounded-2xl p-5 border border-zinc-100 flex items-start justify-between group opacity-70 hover:opacity-100 transition-all">
      <div className="flex flex-col gap-2">
        <p className="text-[15px] font-medium text-zinc-500 line-through decoration-zinc-300 leading-relaxed">
          {item.text}
        </p>
        <div className="flex items-center gap-1.5 text-zinc-300">
          <Clock className="w-3.5 h-3.5" />
          <span className="text-[11px] font-medium tracking-tight">
            {item.time}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onDelete?.(item.id)}
          className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-300 hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
