"use client";

import { AppLayout } from "@/components/AppLayout";
import { Plus, Trophy } from "lucide-react";
import { GoalCard, Goal } from "./components/GoalCard";
import { NewGoalCard } from "./components/NewGoalCard";

const INITIAL_GOALS: Goal[] = [
  {
    id: "goal-1",
    title: "Launch new marketing campaign",
    progress: 65,
    deadline: "May 15, 2026",
    tasksCompleted: 13,
    totalTasks: 20,
    status: "active",
  },
  {
    id: "goal-2",
    title: "Complete financial planning",
    progress: 40,
    deadline: "Apr 30, 2026",
    tasksCompleted: 4,
    totalTasks: 10,
    status: "active",
  },
  {
    id: "goal-3",
    title: "Ship product v2.0",
    progress: 78,
    deadline: "Jun 1, 2026",
    tasksCompleted: 23,
    totalTasks: 30,
    status: "active",
  },
  {
    id: "goal-4",
    title: "Learn Spanish basics",
    progress: 25,
    deadline: "Dec 31, 2026",
    tasksCompleted: 5,
    totalTasks: 20,
    status: "active",
  },
];

export default function GoalsPage() {
  // Mock actions prepared for backend integration:
  const handleCreateGoal = () => {
    console.log("Create goal action triggered");
  };

  const handleGoalClick = (id: string) => {
    console.log("Goal card clicked:", id);
  };

  const handleGoalMenuClick = (id: string, e: React.MouseEvent) => {
    console.log("Goal menu clicked for:", id);
  };

  return (
    <AppLayout title="Goals" subtitle="TRACK YOUR LONG-TERM OBJECTIVES">
      <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* Header Action Row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold font-manrope text-zinc-800">
              Objectives
            </h2>
            <p className="text-sm text-zinc-500 font-medium">
              Focused progress on high-leverage milestones
            </p>
          </div>
          <button
            onClick={handleCreateGoal}
            className="bg-[#1a5f49] hover:bg-[#154a39] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-[0px_4px_12px_rgba(26,95,73,0.15)] hover:shadow-[0px_6px_16px_rgba(26,95,73,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2 focus:outline-hidden"
          >
            <Plus className="w-5 h-5" />
            Create Goal
          </button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INITIAL_GOALS.map((goal) => (
            <GoalCard
              key={goal.id}
              goal={goal}
              onClick={handleGoalClick}
              onMenuClick={handleGoalMenuClick}
            />
          ))}

          {/* New Goal Placeholder Card */}
          <NewGoalCard onClick={handleCreateGoal} />
        </div>

        {/* Long term Archive Section */}
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex items-center gap-3">
            <Trophy className="w-5 h-5 text-zinc-400" />
            <h3 className="text-xl font-bold font-manrope text-zinc-800">
              Achieved
            </h3>
          </div>

          <div className="bg-zinc-50/50 rounded-2xl border border-zinc-100 p-8 flex flex-col items-center justify-center text-center gap-2 border-dashed">
            <p className="text-zinc-400 text-sm font-medium">
              Your completed objectives will appear here.
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
