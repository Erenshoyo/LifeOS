import React from "react";
import { CheckCircle2, Circle, Flame } from "lucide-react";

export interface Habit {
  id: string;
  title: string;
  completed: boolean;
  streak: number;
}

interface HabitItemProps {
  habit: Habit;
  onToggle?: (id: string) => void;
  isLast?: boolean;
}

export function HabitItem({ habit, onToggle, isLast = false }: HabitItemProps) {
  const handleToggle = () => {
    if (onToggle) {
      onToggle(habit.id);
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
        {habit.completed ? (
          <CheckCircle2 className="w-6 h-6 text-brand-dark fill-brand-dark stroke-white" />
        ) : (
          <Circle className="w-6 h-6 text-zinc-300 stroke-[2.5]" />
        )}
        <span
          className={
            habit.completed
              ? "line-through text-zinc-400 font-semibold"
              : "text-zinc-700 font-semibold"
          }
        >
          {habit.title}
        </span>
      </div>
      <div
        className={`flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${
          habit.completed
            ? "text-orange-500 bg-orange-50"
            : "text-zinc-500 bg-zinc-100"
        }`}
      >
        <Flame
          className={`w-3.5 h-3.5 ${
            habit.completed ? "fill-orange-500" : ""
          }`}
        />
        {habit.streak} days
      </div>
    </div>
  );
}
