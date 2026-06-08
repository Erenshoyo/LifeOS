"use client";

import { AppLayout } from "@/components/AppLayout";
import { Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { TimerCard } from "./components/TimerCard";
import { AmbientSoundCard } from "./components/AmbientSoundCard";
import { FocusTaskItem, FocusTask } from "./components/FocusTaskItem";
import { AnalyticsPanel } from "./components/AnalyticsPanel";

const INITIAL_TASKS: FocusTask[] = [
  {
    id: "task-1",
    title: "Finalize Q3 Design System documentation",
    description: "Reviewing the \"No-Line\" rule implementation and verifying all surface tokens are applied across the dashboard views.",
    isPrimary: true,
    tag: "TOP PRIORITY",
    duration: "45m",
    category: "Work",
    completed: false,
  },
  {
    id: "task-2",
    title: "Update brand anchor components JSON",
    description: "Sync new styling keys for the navigation sidebar.",
    isPrimary: false,
    completed: false,
  },
];

export default function FocusModePage() {
  // Timer State
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  // Active Tasks State (prepared for backend integration)
  const [tasks, setTasks] = useState<FocusTask[]>(INITIAL_TASKS);

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsActive(false);
      setTimeLeft(1500); // Reset but don't auto-start
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500);
  };

  const handleToggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <AppLayout title="Focus Mode" subtitle="DEEP WORK SESSION">
      <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 font-inter mt-6">
        {/* Main Focus Area (Left) */}
        <div className="flex flex-col gap-12">
          {/* Top Row: Timer and Ambient Sound */}
          <div className="flex flex-col md:flex-row gap-6">
            <TimerCard
              timeLeft={timeLeft}
              isActive={isActive}
              onToggle={toggleTimer}
              onReset={resetTimer}
            />

            <AmbientSoundCard />
          </div>

          {/* Bottom Section: Intentions */}
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between px-2">
              <div className="flex flex-col gap-1">
                <b className="tracking-[1px] leading-[15px] uppercase text-xs text-[#5c8d7e]">
                  INTENTION
                </b>
                <b className="leading-8 text-2xl font-manrope text-zinc-800">
                  Active Focus Tasks
                </b>
              </div>
              <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
                <Plus className="w-4 h-4" />
                Add Task
              </button>
            </div>

            <div className="flex flex-col gap-4">
              {tasks.map((task) => (
                <FocusTaskItem
                  key={task.id}
                  task={task}
                  onToggleComplete={handleToggleTask}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Analytics Panel */}
        <AnalyticsPanel />
      </div>
    </AppLayout>
  );
}
