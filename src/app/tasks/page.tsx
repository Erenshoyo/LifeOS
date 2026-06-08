"use client";

import { AppLayout } from "@/components/AppLayout";
import { CloudLightning } from "lucide-react";
import { useState } from "react";
import { CurrentFocusCard } from "./components/CurrentFocusCard";
import { PendingTasksCard } from "./components/PendingTasksCard";
import { TaskListItem, Task } from "./components/TaskListItem";
import { TaskCategoryCard } from "./components/TaskCategoryCard";

const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Draft Q3 Financial Roadmap",
    description: "High-level strategic planning for upcoming investments",
    time: "10:30 AM",
    isHighlighted: true,
    isCompleted: false,
  },
  {
    id: "task-2",
    title: "Team Feedback Synthesis",
    description: "Categorize survey results into actionable items",
    time: "01:00 PM",
    isHighlighted: true,
    isCompleted: false,
  },
  {
    id: "task-3",
    title: "Monthly Maintenance Schedule",
    description: "Review and update automated system scripts",
    time: "04:30 PM",
    isHighlighted: false,
    isCompleted: false,
  },
];

const INITIAL_CATEGORIES = [
  {
    category: "Personal Growth",
    icon: "user" as const,
    variant: "zinc" as const,
    items: [
      "Complete 'Mindful Leadership' Module 3",
      "Review annual reading list targets",
    ],
  },
  {
    category: "Infrastructure",
    icon: "shield" as const,
    variant: "emerald" as const,
    items: [
      "Archive old project folders from NAS",
      "Update workspace security protocols",
    ],
  },
];

export default function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const handleToggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const pendingCount = tasks.filter((t) => !t.isCompleted).length;

  return (
    <AppLayout title="Tasks" subtitle="MANAGE YOUR FOCUS">
      <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* Hero & Pending Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CurrentFocusCard
            title="Quarterly Productivity Review"
            description="Focus on high-leverage activities and clear the backlog before Friday."
            progress={82}
            goalLabel="Weekly Goal"
          />

          <PendingTasksCard
            count={pendingCount}
            label="Pending Tasks Today"
            badgeText="Priority"
          />
        </div>

        {/* Today's Focus List */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-extrabold font-manrope text-zinc-800 tracking-tight">
                Today&apos;s Focus
              </h3>
              <div className="bg-red-50 text-red-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-red-100">
                CRITICAL
              </div>
            </div>
            <button
              type="button"
              aria-label="View all tasks"
              className="text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-wider focus:outline-hidden"
            >
              View All
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100 divide-y divide-zinc-50 overflow-hidden">
            {tasks.map((task) => (
              <TaskListItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
              />
            ))}
          </div>
        </div>

        {/* Secondary Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-extrabold font-manrope text-zinc-800 tracking-tight">
            Upcoming & Secondary
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {INITIAL_CATEGORIES.map((cat, idx) => (
              <TaskCategoryCard
                key={idx}
                category={cat.category}
                icon={cat.icon}
                variant={cat.variant}
                items={cat.items}
              />
            ))}
          </div>
        </div>

        {/* Sync Status Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-zinc-200 text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <CloudLightning className="w-3.5 h-3.5" />
              Last synced: 2 minutes ago
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-300" />
            <div className="flex items-center gap-1.5 text-zinc-500">
              Offline mode active
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-zinc-600">Privacy</span>
            <span className="cursor-pointer hover:text-zinc-600">Terms</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
