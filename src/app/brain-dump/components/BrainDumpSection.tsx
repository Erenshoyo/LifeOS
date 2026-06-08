import React from "react";
import { LucideIcon } from "lucide-react";

interface BrainDumpSectionProps {
  title: string;
  icon: LucideIcon;
  count: number;
  badgeTextColorClass?: string;
  actionText?: string;
  onAction?: () => void;
  children: React.ReactNode;
}

export function BrainDumpSection({
  title,
  icon: Icon,
  count,
  badgeTextColorClass = "text-zinc-500",
  actionText,
  onAction,
  children,
}: BrainDumpSectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Icon className="w-5 h-5 text-zinc-400" />
          <h3 className="text-lg font-bold font-manrope text-zinc-800">
            {title}
          </h3>
          <span className={`bg-zinc-100 ${badgeTextColorClass} text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight`}>
            {count}
          </span>
        </div>
        {actionText && onAction && (
          <button
            onClick={onAction}
            className="text-xs font-bold text-zinc-400 hover:text-zinc-600 uppercase tracking-widest transition-colors"
          >
            {actionText}
          </button>
        )}
      </div>

      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}
