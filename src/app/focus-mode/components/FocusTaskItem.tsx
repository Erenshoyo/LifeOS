import { Clock, Flag } from "lucide-react";

export interface FocusTask {
  id: string;
  title: string;
  description?: string;
  isPrimary?: boolean;
  tag?: string;
  duration?: string;
  category?: string;
  completed?: boolean;
}

interface FocusTaskItemProps {
  task: FocusTask;
  onToggleComplete?: (id: string) => void;
}

export function FocusTaskItem({ task, onToggleComplete }: FocusTaskItemProps) {
  const handleToggle = () => {
    if (onToggleComplete) {
      onToggleComplete(task.id);
    }
  };

  if (task.isPrimary) {
    return (
      <div className="shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-white border-l-4 border-zinc-800 p-6 flex flex-col gap-4 transition-all hover:shadow-[0px_16px_40px_rgba(0,0,0,0.06)]">
        <div className="flex items-start gap-4">
          <button
            onClick={handleToggle}
            className="mt-1 rounded border-2 border-zinc-800 w-6 h-6 shrink-0 cursor-pointer focus:outline-hidden"
            aria-label={`Mark task ${task.title} as completed`}
          />
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <b className="text-lg font-manrope leading-7 text-zinc-800 tracking-tight">
                {task.title}
              </b>
              {task.tag && (
                <div className="rounded-[4px] bg-[#2d3748] py-1 px-2 text-[10px] font-bold text-white uppercase tracking-tight">
                  {task.tag}
                </div>
              )}
            </div>
            {task.description && (
              <p className="text-zinc-500 text-sm leading-relaxed max-w-[659px]">
                {task.description}
              </p>
            )}
            <div className="flex items-center gap-4 mt-2">
              {task.duration && (
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
                  <Clock className="w-3 h-3" />
                  <span>{task.duration}</span>
                </div>
              )}
              {task.category && (
                <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
                  <Flag className="w-3 h-3" />
                  <span>{task.category}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Secondary task variant
  return (
    <div className="bg-[#f2f2f2] rounded-2xl p-6 flex items-start gap-4 transition-all opacity-80 hover:opacity-100">
      <button
        onClick={handleToggle}
        className="mt-1 rounded border-2 border-[#c1c8c2] w-6 h-6 shrink-0 cursor-pointer focus:outline-hidden"
        aria-label={`Mark task ${task.title} as completed`}
      />
      <div className="flex flex-col gap-1">
        <b className="leading-6 font-semibold text-zinc-700">
          {task.title}
        </b>
        {task.description && (
          <p className="text-sm text-zinc-500">
            {task.description}
          </p>
        )}
      </div>
    </div>
  );
}
