"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Plus,
  Calendar,
  MoreVertical,
  CheckCircle2,
  Target,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const goalsData = [
  {
    title: "Launch new marketing campaign",
    progress: 65,
    deadline: "May 15, 2026",
    tasksCompleted: 13,
    totalTasks: 20,
    status: "active",
  },
  {
    title: "Complete financial planning",
    progress: 40,
    deadline: "Apr 30, 2026",
    tasksCompleted: 4,
    totalTasks: 10,
    status: "active",
  },
  {
    title: "Ship product v2.0",
    progress: 78,
    deadline: "Jun 1, 2026",
    tasksCompleted: 23,
    totalTasks: 30,
    status: "active",
  },
  {
    title: "Learn Spanish basics",
    progress: 25,
    deadline: "Dec 31, 2026",
    tasksCompleted: 5,
    totalTasks: 20,
    status: "active",
  },
];

import { useState, useEffect } from "react";
import { Skeleton } from "boneyard-js/react";
import "@/bones/registry";

export default function GoalsPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout title="Goals" subtitle="TRACK YOUR LONG-TERM OBJECTIVES">
      <Skeleton name="goals" loading={isLoading}>
        <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        
        {/* Header Action Row */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl font-bold font-manrope text-zinc-800">Objectives</h2>
            <p className="text-sm text-zinc-500 font-medium">Focused progress on high-leverage milestones</p>
          </div>
          <button className="bg-[#1a5f49] hover:bg-[#154a39] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-[0px_4px_12px_rgba(26,95,73,0.15)] hover:shadow-[0px_6px_16px_rgba(26,95,73,0.25)] hover:-translate-y-0.5 transition-all flex items-center gap-2">
            <Plus className="w-5 h-5" />
            Create Goal
          </button>
        </div>

        {/* Goals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goalsData.map((goal, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 p-6 flex flex-col gap-5 transition-all hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] hover:-translate-y-1 group cursor-pointer"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <h3 className="text-[17px] font-bold text-zinc-900 font-manrope leading-tight pr-4">
                  {goal.title}
                </h3>
                <button className="text-zinc-300 hover:text-zinc-500 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>

              {/* Progress Bar Section */}
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Progress</span>
                  <span className="text-sm font-extrabold text-[#1a5f49]">{goal.progress}%</span>
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
          ))}

          {/* New Goal Placeholder Card */}
          <div className="border-2 border-dashed border-zinc-200 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 text-zinc-400 hover:border-zinc-300 hover:text-zinc-500 transition-all cursor-pointer group min-h-[180px]">
            <div className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Plus className="w-6 h-6" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest">New Goal</span>
          </div>
        </div>

        {/* Long term Archive Section (Optional UI addition) */}
        <div className="flex flex-col gap-6 mt-6">
           <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-zinc-400" />
              <h3 className="text-xl font-bold font-manrope text-zinc-800">Achieved</h3>
           </div>
           
           <div className="bg-zinc-50/50 rounded-2xl border border-zinc-100 p-8 flex flex-col items-center justify-center text-center gap-2 border-dashed">
              <p className="text-zinc-400 text-sm font-medium">Your completed objectives will appear here.</p>
           </div>
        </div>

        </div>
      </Skeleton>
    </AppLayout>
  );
}
