"use client";

import { AppLayout } from "@/components/AppLayout";
import { Plus } from "lucide-react";
import { useState } from "react";
import { HabitKpiCard } from "./components/HabitKpiCard";
import { WeeklyActivityChart, ActivityDataPoint } from "./components/WeeklyActivityChart";
import { HabitCard, Habit } from "./components/HabitCard";

const CHART_DATA: ActivityDataPoint[] = [
  { day: "Mon", count: 3 },
  { day: "Tue", count: 2 },
  { day: "Wed", count: 4 },
  { day: "Thu", count: 3 },
  { day: "Fri", count: 1 },
  { day: "Sat", count: 4 },
  { day: "Sun", count: 4 },
];

const KPI_STATS = [
  {
    value: 12,
    label: "Current Streak",
    icon: "flame" as const,
    colorVariant: "orange" as const,
  },
  {
    value: 18,
    label: "Longest Streak",
    icon: "trophy" as const,
    colorVariant: "emerald" as const,
  },
  {
    value: "73%",
    label: "Completion Rate",
    icon: "chart" as const,
    colorVariant: "cyan" as const,
  },
];

const INITIAL_HABITS: Habit[] = [
  {
    id: "habit-1",
    name: "Morning Meditation",
    icon: "compass",
    weeklyRate: 85,
    bestStreak: 18,
    currentStreak: 12,
    completedCount: 6,
    totalDays: 7,
    weeklyStatus: [true, true, true, false, true, true, true],
  },
  {
    id: "habit-2",
    name: "Drink 8 glasses of water",
    icon: "droplets",
    weeklyRate: 78,
    bestStreak: 14,
    currentStreak: 5,
    completedCount: 5,
    totalDays: 7,
    weeklyStatus: [true, true, false, true, true, true, false],
  },
  {
    id: "habit-3",
    name: "Read for 30 minutes",
    icon: "book-open",
    weeklyRate: 65,
    bestStreak: 9,
    currentStreak: 3,
    completedCount: 3,
    totalDays: 7,
    weeklyStatus: [false, true, true, false, true, false, false],
  },
  {
    id: "habit-4",
    name: "Morning Exercise",
    icon: "dumbbell",
    weeklyRate: 55,
    bestStreak: 7,
    currentStreak: 0,
    completedCount: 3,
    totalDays: 7,
    weeklyStatus: [true, false, true, false, false, true, false],
  },
  {
    id: "habit-5",
    name: "Daily Journal",
    icon: "pen-tool",
    weeklyRate: 82,
    bestStreak: 15,
    currentStreak: 8,
    completedCount: 6,
    totalDays: 7,
    weeklyStatus: [true, true, true, true, true, false, true],
  },
];

export default function HabitsPage() {
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);

  // Actions prepared for backend integration:
  const handleAddHabit = () => {
    console.log("Add habit clicked");
  };

  const handleHabitClick = (id: string) => {
    console.log("Habit clicked:", id);
  };

  return (
    <AppLayout title="Habits" subtitle="BUILD LASTING CONSISTENCY">
      <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* Habit KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {KPI_STATS.map((kpi, idx) => (
            <HabitKpiCard
              key={idx}
              value={kpi.value}
              label={kpi.label}
              icon={kpi.icon}
              colorVariant={kpi.colorVariant}
            />
          ))}
        </div>

        {/* Weekly Activity Chart Card */}
        <WeeklyActivityChart data={CHART_DATA} />

        {/* Today's Habits Grid */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-800 font-manrope">
              Today&apos;s Habits
            </h3>
            <button
              onClick={handleAddHabit}
              className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-800 transition-colors uppercase tracking-widest focus:outline-hidden"
            >
              <Plus className="w-4 h-4" />
              Add Habit
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {habits.map((habit) => (
              <HabitCard
                key={habit.id}
                habit={habit}
                onCardClick={handleHabitClick}
              />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
