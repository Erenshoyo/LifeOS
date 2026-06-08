import { Calendar } from "lucide-react";

interface PendingTasksCardProps {
  count: number;
  label: string;
  badgeText: string;
}

export function PendingTasksCard({
  count,
  label,
  badgeText,
}: PendingTasksCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col justify-between transition-all hover:shadow-[0px_12px_48px_rgba(25,28,29,0.08)]">
      <div className="flex items-start justify-between">
        <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600">
          <Calendar className="w-6 h-6" />
        </div>
        <div className="bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
          {badgeText}
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-6">
        <div className="text-[36px] font-extrabold text-zinc-900 leading-none">
          {count}
        </div>
        <div className="text-sm font-medium text-zinc-500">{label}</div>
      </div>
    </div>
  );
}
