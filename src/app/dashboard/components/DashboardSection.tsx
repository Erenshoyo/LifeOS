import React from "react";
import { Plus } from "lucide-react";

interface DashboardSectionProps {
  category: string;
  title: string;
  onAdd?: () => void;
  children: React.ReactNode;
}

export function DashboardSection({
  category,
  title,
  onAdd,
  children,
}: DashboardSectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] tracking-[1px] uppercase text-zinc-500 font-bold">
            {category}
          </span>
          <h2 className="text-2xl font-bold font-manrope text-zinc-800">
            {title}
          </h2>
        </div>
        {onAdd && (
          <button
            onClick={onAdd}
            className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col overflow-hidden">
        {children}
      </div>
    </div>
  );
}
