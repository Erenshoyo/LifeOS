import { Flame, Trophy, BarChart3 } from "lucide-react";

type KpiIconType = "flame" | "trophy" | "chart";
type KpiColorVariant = "orange" | "emerald" | "cyan";

interface HabitKpiCardProps {
  value: string | number;
  label: string;
  icon: KpiIconType;
  colorVariant: KpiColorVariant;
}

export function HabitKpiCard({
  value,
  label,
  icon,
  colorVariant,
}: HabitKpiCardProps) {
  // Determine icon component
  const getIcon = () => {
    switch (icon) {
      case "flame":
        return <Flame className="w-6 h-6 fill-orange-500" />;
      case "trophy":
        return <Trophy className="w-6 h-6 fill-emerald-500" />;
      case "chart":
        return <BarChart3 className="w-6 h-6" />;
    }
  };

  // Determine styling based on colorVariant
  const getIconContainerClass = () => {
    switch (colorVariant) {
      case "orange":
        return "bg-orange-100 text-orange-600";
      case "emerald":
        return "bg-emerald-100 text-emerald-600";
      case "cyan":
        return "bg-cyan-100 text-cyan-600";
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center gap-4 transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.04)]">
      <div
        className={`w-12 h-12 rounded-full flex items-center justify-center ${getIconContainerClass()}`}
      >
        {getIcon()}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-extrabold text-zinc-900 leading-tight">
          {value}
        </span>
        <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
          {label}
        </span>
      </div>
    </div>
  );
}
