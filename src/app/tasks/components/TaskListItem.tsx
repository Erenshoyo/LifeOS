import { Clock, CheckCircle2 } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  description: string;
  time: string;
  isHighlighted?: boolean;
  isCompleted?: boolean;
}

interface TaskListItemProps {
  task: Task;
  onToggle?: (id: string) => void;
}

export function TaskListItem({ task, onToggle }: TaskListItemProps) {
  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggle) {
      onToggle(task.id);
    }
  };

  return (
    <div
      onClick={() => onToggle && onToggle(task.id)}
      className="flex items-center justify-between p-6 hover:bg-zinc-50/50 transition-colors group cursor-pointer"
    >
      <div className="flex items-center gap-6">
        <button
          onClick={handleToggle}
          type="button"
          className="focus:outline-hidden"
          aria-label={task.isCompleted ? "Mark task uncompleted" : "Mark task completed"}
        >
          {task.isCompleted ? (
            <div className="w-6 h-6 rounded-full border-2 border-emerald-500 bg-[#1a5f49] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-zinc-400 transition-colors shrink-0" />
          )}
        </button>

        <div className="flex flex-col gap-0.5">
          <span
            className={`text-base font-semibold transition-all ${
              task.isCompleted ? "text-zinc-400 line-through" : "text-zinc-900"
            }`}
          >
            {task.title}
          </span>
          <span className="text-[12px] text-zinc-500 font-medium">
            {task.description}
          </span>
        </div>
      </div>

      <div
        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-bold shrink-0 ${
          task.isHighlighted
            ? "bg-emerald-50 text-emerald-700"
            : "bg-zinc-100 text-zinc-500"
        }`}
      >
        <Clock className="w-3.5 h-3.5" />
        {task.time}
      </div>
    </div>
  );
}
