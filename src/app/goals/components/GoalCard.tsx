import { Calendar, MoreVertical } from "lucide-react";

export interface Goal {
  id: string;
  title: string;
  progress: number;
  deadline: string;
  tasksCompleted: number;
  totalTasks: number;
  status: string;
}

interface GoalCardProps {
  goal: Goal;
  onMenuClick?: (id: string, e: React.MouseEvent) => void;
  onClick?: (id: string) => void;
}

export function GoalCard({ goal, onMenuClick, onClick }: GoalCardProps) {
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onMenuClick) {
      onMenuClick(goal.id, e);
    }
  };

  const handleCardClick = () => {
    if (onClick) {
      onClick(goal.id);
    }
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 p-6 flex flex-col gap-5 transition-all hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 group cursor-pointer"
    >
      {/* Card Header */}
      <div className="flex items-start justify-between">
        <h3 className="text-[17px] font-bold text-zinc-900 font-manrope leading-tight pr-4">
          {goal.title}
        </h3>
        <button
          onClick={handleMenuClick}
          className="text-zinc-300 hover:text-zinc-500 transition-colors focus:outline-hidden"
          aria-label="More options"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Bar Section */}
      <div className="flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
            Progress
          </span>
          <span className="text-sm font-extrabold text-[#1a5f49]">
            {goal.progress}%
          </span>
        </div>
        <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1a5f49] rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${goal.progress}%` }}
          />
        </div>
      </div>

      {/* Card Footer Info */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1.5 text-zinc-500">
          <Calendar className="w-4 h-4" />
          <span className="text-[12px] font-semibold">{goal.deadline}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-[12px] font-semibold text-zinc-500">
            {goal.tasksCompleted}/{goal.totalTasks} tasks
          </span>
        </div>
      </div>
    </div>
  );
}
