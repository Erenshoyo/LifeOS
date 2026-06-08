import { LayoutDashboard, CheckCircle2, Flame, PenTool } from "lucide-react";

interface DaySummaryCardProps {
  focusPercentage: number;
  tasksDone: string;
  habitsDone: string;
  journalEntries: string;
}

export function DaySummaryCard({
  focusPercentage,
  tasksDone,
  habitsDone,
  journalEntries,
}: DaySummaryCardProps) {
  // SVG circle calculations: radius is 36, circumference is 2 * pi * r = 226.19
  const strokeDashoffset = 226 - (226 * focusPercentage) / 100;

  const stats = [
    { label: "Tasks Done", val: tasksDone, icon: CheckCircle2 },
    { label: "Habits", val: habitsDone, icon: Flame },
    { label: "Journal Entries", val: journalEntries, icon: PenTool },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col gap-10">
      <div className="flex items-center gap-3">
        <LayoutDashboard className="w-5 h-5 text-zinc-400" />
        <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#5c8d7e]">
          Day Summary
        </h3>
      </div>

      {/* Focus Circular Chart */}
      <div className="flex items-center gap-8">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#f4f4f5"
              strokeWidth="6"
              fill="transparent"
            />
            <circle
              cx="40"
              cy="40"
              r="36"
              stroke="#002d1c"
              strokeWidth="6"
              fill="transparent"
              strokeDasharray="226"
              strokeDashoffset={strokeDashoffset}
            />
          </svg>
          <b className="absolute text-sm font-bold text-zinc-900">
            {focusPercentage}%
          </b>
        </div>
        <div className="flex flex-col">
          <b className="text-base font-bold text-zinc-900">Focus Achieved</b>
          <span className="text-xs text-zinc-500">Strong progress today</span>
        </div>
      </div>

      {/* Metric List */}
      <div className="flex flex-col gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-zinc-50 rounded-xl p-4 flex items-center justify-between group hover:bg-zinc-100/50 transition-all"
          >
            <div className="flex items-center gap-3 font-medium text-sm text-zinc-700">
              <stat.icon className="w-4 h-4 text-zinc-400" />
              {stat.label}
            </div>
            <b className="text-sm text-zinc-900">{stat.val}</b>
          </div>
        ))}
      </div>
    </div>
  );
}
