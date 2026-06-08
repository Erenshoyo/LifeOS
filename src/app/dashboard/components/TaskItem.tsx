import React from "react";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  time: string;
}

interface TaskItemProps {
  task: Task;
  onToggle?: (id: string) => void;
  isLast?: boolean;
}

export function TaskItem({ task, onToggle, isLast = false }: TaskItemProps) {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(task.id);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className={`flex items-center justify-between p-5 ${
        !isLast ? "border-b border-zinc-100" : ""
      } group hover:bg-zinc-50/50 transition-colors cursor-pointer`}
    >
      <div className="flex items-center gap-4">
        {task.completed ? (
          <CheckCircle2 className="w-6 h-6 text-brand-dark fill-brand-dark stroke-white" />
        ) : (
          <Circle className="w-6 h-6 text-zinc-300 stroke-[2.5]" />
        )}
        <span
          className={
            task.completed
              ? "line-through text-zinc-400 font-semibold"
              : "text-zinc-700 font-semibold"
          }
        >
          {task.title}
        </span>
      </div>
      <div
        className={`flex items-center gap-1.5 text-xs font-medium ${
          task.completed ? "text-zinc-400" : "text-zinc-500"
        }`}
      >
        <Clock className="w-3.5 h-3.5" />
        {task.time}
      </div>
    </div>
  );
}
