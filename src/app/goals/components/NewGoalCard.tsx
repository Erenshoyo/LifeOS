import { Plus } from "lucide-react";

interface NewGoalCardProps {
  onClick?: () => void;
}

export function NewGoalCard({ onClick }: NewGoalCardProps) {
  return (
    <div
      onClick={onClick}
      className="border-2 border-dashed border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-zinc-400 hover:border-zinc-300 hover:text-zinc-500 transition-all cursor-pointer group min-h-[180px]"
    >
      <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:scale-110 transition-transform">
        <Plus className="w-6 h-6" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest">
        New Goal
      </span>
    </div>
  );
}
