import { Flame, Compass, Droplets, BookOpen, Dumbbell, PenTool } from "lucide-react";

export interface Habit {
  id: string;
  name: string;
  icon: "compass" | "droplets" | "book-open" | "dumbbell" | "pen-tool";
  weeklyRate: number;
  bestStreak: number;
  currentStreak: number;
  completedCount: number;
  totalDays: number;
  weeklyStatus: boolean[]; // Array of 7 booleans representing M, T, W, T, F, S, S
}

interface HabitCardProps {
  habit: Habit;
  onCardClick?: (id: string) => void;
}

export function HabitCard({ habit, onCardClick }: HabitCardProps) {
  // Map string icon names to Lucide icon components
  const getIcon = () => {
    switch (habit.icon) {
      case "compass":
        return <Compass className="w-6 h-6" />;
      case "droplets":
        return <Droplets className="w-6 h-6" />;
      case "book-open":
        return <BookOpen className="w-6 h-6" />;
      case "dumbbell":
        return <Dumbbell className="w-6 h-6" />;
      case "pen-tool":
        return <PenTool className="w-6 h-6" />;
    }
  };

  // Map string icon names to custom text/color classes
  const getIconColorClass = () => {
    switch (habit.icon) {
      case "compass":
        return "text-brand-dark";
      case "droplets":
        return "text-blue-500";
      case "book-open":
        return "text-indigo-500";
      case "dumbbell":
        return "text-red-500";
      case "pen-tool":
        return "text-brand-light";
    }
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(habit.id);
    }
  };

  const daysOfWeek = ["M", "T", "W", "T", "F", "S", "S"];

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div
            className={`w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center ${getIconColorClass()}`}
          >
            {getIcon()}
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-zinc-900">
              {habit.name}
            </span>
            <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
              <span>{habit.weeklyRate}% this week</span>
              <span className="w-1 h-1 rounded-full bg-zinc-300" />
              <span>Best: {habit.bestStreak} days</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-0.5">
          <div className="flex items-center gap-1.5 text-orange-500">
            {habit.currentStreak > 0 ? (
              <>
                <Flame className="w-4 h-4 fill-orange-500" />
                <span className="text-lg font-bold leading-none">
                  {habit.currentStreak}
                </span>
              </>
            ) : (
              <>
                <Flame className="w-4 h-4" />
                <span className="text-lg font-bold leading-none text-zinc-400">
                  0
                </span>
              </>
            )}
          </div>
          <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">
            Day Streak
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
          <span>Progress</span>
          <span className="text-zinc-400">
            {habit.completedCount} / {habit.totalDays} Days
          </span>
        </div>
        <div className="flex items-center gap-1.5 justify-between">
          {daysOfWeek.map((day, i) => (
            <div
              key={day + i}
              className="flex-1 flex flex-col items-center gap-1.5"
            >
              <div
                className={`h-2 w-full rounded-full ${
                  habit.weeklyStatus[i] ? "bg-emerald-500" : "bg-zinc-200"
                }`}
              />
              <span className="text-[10px] font-bold text-zinc-400">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
