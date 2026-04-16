"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  CheckCircle2,
  Circle,
  Plus,
  Target,
  Flame,
  Clock,
  CloudLightning,
} from "lucide-react";

import { useState, useCallback } from "react";


export default function Dashboard() {
  const [journalEntry, setJournalEntry] = useState("");

  const getTodayStrings = () => {
    const now = new Date();
    const title = now.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
    const subtitle = now
      .toLocaleDateString("en-US", { weekday: "long" })
      .toUpperCase();
    return { title, subtitle };
  };

  const { title: todayTitle, subtitle: todaySubtitle } = getTodayStrings();

  const saveEntry = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: wire to real persistence layer
    },
    []
  );

  return (
    <AppLayout subtitle={todaySubtitle} title={todayTitle}>
        <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Progress Card */}
          <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border-l-[4px] border-l-brand-dark border border-zinc-100 p-6 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.08)]">
            <div className="flex items-center justify-between tracking-[1.2px] uppercase text-xs font-bold text-zinc-900 font-manrope">
              <span>Today&apos;s Progress</span>
              <Target className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="text-[30px] font-extrabold text-brand-dark font-manrope tracking-tight">
              1/3
            </div>
            <div className="text-sm text-zinc-500 font-medium">Tasks Completed</div>
          </div>

          {/* Habit Streak Card */}
          <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border-l-[4px] border-zinc-200 border border-zinc-100 p-6 flex flex-col gap-4 relative overflow-hidden transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.08)]">
            <div className="flex items-center justify-between tracking-[1.2px] uppercase text-xs font-bold text-zinc-900 font-manrope">
              <span>Habit Streak</span>
              <Flame className="w-5 h-5 text-zinc-400" />
            </div>
            <div className="text-[30px] font-extrabold text-zinc-800 font-manrope tracking-tight">
              2/3
            </div>
            <div className="text-sm text-zinc-500 font-medium">Habits Done</div>
          </div>

          {/* Focus Time Card */}
          <div className="relative overflow-hidden rounded-2xl p-6 flex flex-col gap-4 shadow-[0px_12px_32px_rgba(25,28,29,0.1)] bg-gradient-to-br from-[#002d1c] to-[#00452e] text-white">
            {/* Soft Glow Effect */}
            <div className="absolute top-1/2 left-3/4 -translate-y-1/2 w-24 h-24 bg-white/20 blur-[60px] rounded-full pointer-events-none" />
            
            <div className="relative flex items-center justify-between opacity-80 tracking-[1.2px] uppercase text-xs font-bold font-manrope z-10 w-full">
              <span>Focus Time</span>
              <Clock className="w-5 h-5" />
            </div>
            <div className="relative text-[30px] font-extrabold font-manrope z-10">
              2h 45m
            </div>
            <div className="relative text-sm opacity-80 font-medium z-10">
              Deep Work Today
            </div>
          </div>
        </div>

        {/* 2-Column Main Grids (Tasks & Habits) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          {/* FOCUS - Tasks */}
          <div className="flex flex-col gap-5">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[1px] uppercase text-zinc-500 font-bold">
                  FOCUS
                </span>
                <h2 className="text-2xl font-bold font-manrope text-zinc-800">
                  Today&apos;s Tasks
                </h2>
              </div>
              <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col overflow-hidden">
              {/* Task Item 1 */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-100 group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-dark fill-brand-dark stroke-white" />
                  <span className="line-through text-zinc-400 font-semibold">
                    Morning meditation
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-400">
                  <Clock className="w-3.5 h-3.5" />
                  7:00 AM
                </div>
              </div>

              {/* Task Item 2 */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-100 group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <Circle className="w-6 h-6 text-zinc-300 stroke-[2.5]" />
                  <span className="text-zinc-700 font-semibold">
                    Review client proposal
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                  <Clock className="w-3.5 h-3.5" />
                  10:30 AM
                </div>
              </div>

              {/* Task Item 3 */}
              <div className="flex items-center justify-between p-5 group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <Circle className="w-6 h-6 text-zinc-300 stroke-[2.5]" />
                  <span className="text-zinc-700 font-semibold">
                    Team standup meeting
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                  <Clock className="w-3.5 h-3.5" />
                  2:00 PM
                </div>
              </div>
            </div>
          </div>

          {/* CONSISTENCY - Habits */}
          <div className="flex flex-col gap-5">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] tracking-[1px] uppercase text-zinc-500 font-bold">
                  CONSISTENCY
                </span>
                <h2 className="text-2xl font-bold font-manrope text-zinc-800">
                  Today&apos;s Habits
                </h2>
              </div>
              <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
                <Plus className="w-4 h-4" />
                Add
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col overflow-hidden">
              {/* Habit Item 1 */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-100 group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-dark fill-brand-dark stroke-white" />
                  <span className="line-through text-zinc-400 font-semibold">
                    Morning Exercise
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                  <Flame className="w-3.5 h-3.5 fill-orange-500" />
                  12 days
                </div>
              </div>

              {/* Habit Item 2 */}
              <div className="flex items-center justify-between p-5 border-b border-zinc-100 group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <Circle className="w-6 h-6 text-zinc-300 stroke-[2.5]" />
                  <span className="text-zinc-700 font-semibold">
                    Read 30 mins
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-full">
                  <Flame className="w-3.5 h-3.5" />
                  8 days
                </div>
              </div>

              {/* Habit Item 3 */}
              <div className="flex items-center justify-between p-5 group hover:bg-zinc-50/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-brand-dark fill-brand-dark stroke-white" />
                  <span className="line-through text-zinc-400 font-semibold">
                    Drink 8 glasses of water
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-orange-500 bg-orange-50 px-2.5 py-1 rounded-full">
                  <Flame className="w-3.5 h-3.5 fill-orange-500" />
                  15 days
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reflection - Quick Journal */}
        <div className="flex flex-col gap-5 mt-6">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] tracking-[1px] uppercase text-zinc-500 font-bold">
              REFLECTION
            </span>
            <h2 className="text-2xl font-bold font-manrope text-zinc-800">
              Quick Journal
            </h2>
          </div>

          <form onSubmit={saveEntry} className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col p-8 gap-6 group hover:shadow-[0px_12px_32px_rgba(25,28,29,0.08)] transition-all">
            <label htmlFor="dashboard-journal" className="sr-only">Journal entry</label>
            <textarea 
              id="dashboard-journal"
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="w-full text-zinc-700 font-medium bg-transparent resize-none outline-none focus:ring-0 placeholder:text-zinc-400 placeholder:font-normal leading-relaxed"
              placeholder="How are you feeling today? What's on your mind?"
              rows={2}
            />
            
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100">
              <span className="text-xs text-zinc-500 font-medium">
                Last entry: 1 day ago
              </span>
              <button
                type="submit"
                disabled={!journalEntry.trim()}
                aria-disabled={!journalEntry.trim()}
                title={journalEntry.trim() ? undefined : "Write something first"}
                className="bg-gradient-to-br from-[#002d1c] to-[#00452e] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-[0px_4px_12px_rgba(0,45,28,0.2)] hover:shadow-[0px_6px_16px_rgba(0,45,28,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[0px_4px_12px_rgba(0,45,28,0.2)]"
              >
                Save Entry
              </button>
            </div>
          </form>
        </div>

        {/* Sync Status Footer */}
        <div className="flex flex-wrap items-center justify-start gap-4 mt-12 pt-6 border-t border-zinc-200 text-xs text-zinc-500 font-medium opacity-80">
          <div className="flex items-center gap-1.5">
            <CloudLightning className="w-3.5 h-3.5" />
            Last synced: Just now
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <div className="flex items-center gap-1.5">
            All data stored locally
          </div>
        </div>
        </div>
    </AppLayout>
  );
}
