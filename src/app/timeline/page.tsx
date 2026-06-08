"use client";

import { AppLayout } from "@/components/AppLayout";
import { useState } from "react";
import { TimelineEventItem, TimelineEvent } from "./components/TimelineEventItem";
import { DaySummaryCard } from "./components/DaySummaryCard";
import { ActiveGoalsCard } from "./components/ActiveGoalsCard";

const timelineEvents: TimelineEvent[] = [
  {
    time: "06:45 AM",
    label: "Morning Reflection",
    type: "journal",
    title: "Setting Intentions for Growth",
    content: `"Starting the day with gratitude. Three key priorities today: deep work on the product strategy, meaningful connection with the team, and personal reading time in the evening."`,
    tags: ["mindful", "planning"],
    color: "emerald",
  },
  {
    time: "08:15 AM",
    label: "Morning Ritual",
    type: "habit",
    title: "Meditation & Hydration",
    progress: 100,
    status: "Complete",
    color: "blue",
  },
  {
    time: "10:30 AM",
    label: "Deep Work",
    type: "task",
    title: "Complete Product Strategy Document",
    description: "Finalized the Q2 roadmap with input from stakeholders. Collaborative brainstorming session led to breakthrough insights on user engagement metrics.",
    duration: "2h 30m focus",
    tags: ["priority", "collaboration"],
    color: "zinc",
  },
  {
    time: "03:15 PM",
    label: "Wellness Break",
    type: "habit",
    title: "Afternoon Walk & Stretch",
    progress: 80,
    status: "Complete",
    color: "emerald",
  },
  {
    time: "05:30 PM",
    label: "Capture",
    type: "inspiration",
    title: "Golden Hour Inspiration",
    content: `"Beautiful sunset from the office window. Reminded me why balance matters."`,
    tags: ["reflection"],
    color: "indigo",
  },
];

export default function TimelinePage() {
  const [view, setView] = useState("Daily");

  const getFilteredEvents = (currentView: string) => {
    if (currentView === "Daily") return timelineEvents;
    if (currentView === "Weekly")
      // Group by day — for now show only the most recent event per type as a summary
      return timelineEvents.filter((_, i) => i % 2 === 0);
    // Monthly: show one summary entry per event type
    return timelineEvents.filter((e) => e.type !== "inspiration");
  };

  const visibleEvents = getFilteredEvents(view);

  const handleExportTimeline = () => {
    console.log("Exporting timeline...");
  };

  return (
    <AppLayout title="Timeline" subtitle="YOUR JOURNEY TODAY">
      <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 pb-12 font-inter mt-6">
        {/* Left Column: Timeline Chronicle */}
        <div className="flex flex-col gap-10">
          {/* Timeline Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold text-[#5c8d7e] uppercase tracking-widest">
                Thursday
              </span>
              <h2 className="text-3xl font-bold font-manrope text-zinc-900 leading-tight">
                Your Journey Today
              </h2>
              <p className="text-sm text-zinc-500 font-medium">
                A living chronicle of your intentions and accomplishments.
              </p>
            </div>

            {/* Toggle Switch */}
            <div className="bg-zinc-100 p-1 rounded-full flex items-center min-w-[250px]">
              {["Daily", "Weekly", "Monthly"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex-1 h-8 rounded-full text-xs font-bold transition-all px-4 focus:outline-hidden ${
                    view === v
                      ? "bg-white shadow-sm text-zinc-800"
                      : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Vertical Guide Line */}
            <div className="absolute left-[7px] top-6 bottom-6 w-0.5 bg-linear-to-b from-transparent via-zinc-200 to-transparent" />

            <div className="flex flex-col gap-12">
              {visibleEvents.map((event, idx) => (
                <TimelineEventItem key={idx} event={event} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Summary & Goals */}
        <div className="flex flex-col gap-8">
          {/* Day Summary Card */}
          <DaySummaryCard
            focusPercentage={75}
            tasksDone="8/10"
            habitsDone="5/6"
            journalEntries="2"
          />

          {/* Active Goals Card */}
          <ActiveGoalsCard onExport={handleExportTimeline} />

          {/* Sync Status Footer */}
          <div className="px-4 opacity-60 flex items-center gap-4 text-[11px] font-medium text-zinc-500">
            <span>Last synced: 5 minutes ago</span>
            <div className="w-1 h-1 rounded-full bg-zinc-300" />
            <span>Timeline auto-updating</span>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
