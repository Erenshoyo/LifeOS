import React from "react";
import { LucideIcon } from "lucide-react";

interface KpiCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
  variant?: "default" | "dark";
  borderLeftColor?: string;
  valueColor?: "brand" | "zinc";
}

export function KpiCard({
  title,
  value,
  description,
  icon: Icon,
  variant = "default",
  borderLeftColor = "border-l-zinc-200",
  valueColor = "zinc",
}: KpiCardProps) {
  if (variant === "dark") {
    return (
      <div className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 shadow-[0px_12px_32px_rgba(25,28,29,0.1)] bg-linear-to-br from-[#002d1c] to-[#00452e] text-white">
        {/* Soft Glow Effect */}
        <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-24 h-24 bg-white/20 blur-[60px] rounded-full pointer-events-none" />
        
        <div className="relative flex items-center justify-between opacity-80 tracking-[1.2px] uppercase text-xs font-bold font-manrope z-10 w-full">
          <span>{title}</span>
          <Icon className="w-5 h-5" />
        </div>
        <div className="relative text-[30px] font-extrabold font-manrope z-10">
          {value}
        </div>
        <div className="relative text-sm opacity-80 font-medium z-10">
          {description}
        </div>
      </div>
    );
  }

  const valueColorClass =
    valueColor === "brand" ? "text-brand-dark" : "text-zinc-800";

  return (
    <div className={`bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border-l-4 ${borderLeftColor} border border-zinc-100 p-6 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.08)]`}>
      <div className="flex items-center justify-between tracking-[1.2px] uppercase text-xs font-bold text-zinc-900 font-manrope">
        <span>{title}</span>
        <Icon className="w-5 h-5 text-zinc-400" />
      </div>
      <div className={`text-[30px] font-extrabold font-manrope tracking-tight ${valueColorClass}`}>
        {value}
      </div>
      <div className="text-sm text-zinc-500 font-medium">{description}</div>
    </div>
  );
}
