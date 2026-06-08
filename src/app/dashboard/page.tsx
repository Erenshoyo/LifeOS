"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Target,
  Flame,
  Clock,
  CloudLightning,
} from "lucide-react";

import { useState, useCallback } from "react";
import { KpiCard } from "./components/KpiCard";
import { DashboardSection } from "./components/DashboardSection";
import { Task, TaskItem } from "./components/TaskItem";
import { Habit, HabitItem } from "./components/HabitItem";
import { QuickJournal } from "./components/QuickJournal";

const INITIAL_TASKS: Task[] = [
  { id: "1", title: "Morning meditation", completed: true, time: "7:00 AM" },
  { id: "2", title: "Review client proposal", completed: false, time: "10:30 AM" },
  { id: "3", title: "Team standup meeting", completed: false, time: "2:00 PM" },
];

const INITIAL_HABITS: Habit[] = [
  { id: "1", title: "Morning Exercise", completed: true, streak: 12 },
  { id: "2", title: "Read 30 mins", completed: false, streak: 8 },
  { id: "3", title: "Drink 8 glasses of water", completed: true, streak: 15 },
];

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [habits, setHabits] = useState<Habit[]>(INITIAL_HABITS);
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

  const handleToggleTask = useCallback((id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }, []);

  const handleToggleHabit = useCallback((id: string) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  }, []);

  const handleAddTask = useCallback(() => {
    // TODO: wire to backend/add dialog later
  }, []);

  const handleAddHabit = useCallback(() => {
    // TODO: wire to backend/add dialog later
  }, []);

  const saveEntry = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      // TODO: wire to real persistence layer
    },
    []
  );

  const completedTasksCount = tasks.filter((t) => t.completed).length;
  const completedHabitsCount = habits.filter((h) => h.completed).length;

  return (
    <AppLayout subtitle={todaySubtitle} title={todayTitle}>
      <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KpiCard
            title="Today's Progress"
            value={`${completedTasksCount}/${tasks.length}`}
            description="Tasks Completed"
            icon={Target}
            borderLeftColor="border-l-brand-dark"
            valueColor="brand"
          />

          <KpiCard
            title="Habit Streak"
            value={`${completedHabitsCount}/${habits.length}`}
            description="Habits Done"
            icon={Flame}
            borderLeftColor="border-l-zinc-200"
            valueColor="zinc"
          />

          <KpiCard
            title="Focus Time"
            value="2h 45m"
            description="Deep Work Today"
            icon={Clock}
            variant="dark"
          />
        </div>

        {/* 2-Column Main Grids (Tasks & Habits) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
          <DashboardSection
            category="FOCUS"
            title="Today's Tasks"
            onAdd={handleAddTask}
          >
            {tasks.map((task, index) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                isLast={index === tasks.length - 1}
              />
            ))}
          </DashboardSection>

          <DashboardSection
            category="CONSISTENCY"
            title="Today's Habits"
            onAdd={handleAddHabit}
          >
            {habits.map((habit, index) => (
              <HabitItem
                key={habit.id}
                habit={habit}
                onToggle={handleToggleHabit}
                isLast={index === habits.length - 1}
              />
            ))}
          </DashboardSection>
        </div>

        {/* Reflection - Quick Journal */}
        <QuickJournal
          entry={journalEntry}
          onChange={setJournalEntry}
          onSave={saveEntry}
        />

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

