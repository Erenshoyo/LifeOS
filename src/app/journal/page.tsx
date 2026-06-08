"use client";

import { AppLayout } from "@/components/AppLayout";
import { Plus } from "lucide-react";
import { useState } from "react";
import { JournalEditor } from "./components/JournalEditor";
import { JournalEntryCard, JournalEntry } from "./components/JournalEntryCard";

const INITIAL_ENTRIES: JournalEntry[] = [
  {
    id: "entry-1",
    title: "Morning Reflection",
    emoji: "😊",
    dateStr: "Tuesday, April 7, 2026 at 6:00 AM",
    content: (
      <>
        Started the day feeling energized. Morning meditation really helps. Need
        to remember to{" "}
        <strong className="text-zinc-900 font-semibold">call mom</strong> about
        her birthday plans. Also want to research some meditation apps.
      </>
    ),
  },
  {
    id: "entry-2",
    title: "Team Meeting Notes",
    emoji: "💪",
    dateStr: "Tuesday, April 7, 2026 at 6:00 AM",
    content: (
      <>
        Had a productive meeting with the team. We discussed the Q2 strategy and
        everyone is aligned. Feeling good about the direction we&apos;re heading.
      </>
    ),
    attachment: {
      type: "audio",
      label: "Voice note",
    },
  },
  {
    id: "entry-3",
    title: "Weekend Reflection",
    emoji: "📚",
    dateStr: "Monday, April 6, 2026 at 6:00 AM",
    content: (
      <>
        Reflecting on the weekend. Spent quality time with family and got some
        good reading done.{" "}
        <strong className="text-zinc-900 font-semibold">
          &quot;Atomic Habits&quot;
        </strong>{" "}
        is really insightful. Planning to implement some of the concepts this
        week.
      </>
    ),
    attachment: {
      type: "image",
      label: "Image attached",
    },
  },
  {
    id: "entry-4",
    title: "Morning Run",
    emoji: "🏃",
    dateStr: "Monday, April 6, 2026 at 6:00 AM",
    content: (
      <>
        Beautiful morning run. The weather is perfect. Feeling grateful for my
        health and the ability to move. Goal: run 3 times this week.
      </>
    ),
  },
];

export default function JournalPage() {
  const [entries, setEntries] = useState<JournalEntry[]>(INITIAL_ENTRIES);

  const handleAddEntry = (text: string) => {
    const newEntry: JournalEntry = {
      id: `entry-${Date.now()}`,
      title: "New Reflection",
      emoji: "📝",
      dateStr: new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      }) + " at 6:00 AM", // maintaining style consistency
      content: text,
    };
    setEntries([newEntry, ...entries]);
  };

  const handleMenuClick = (id: string, e: React.MouseEvent) => {
    console.log("Entry menu clicked:", id);
  };

  return (
    <AppLayout title="Journal" subtitle="REFLECT AND CAPTURE">
      <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* New Entry Editor Card */}
        <JournalEditor onAddEntry={handleAddEntry} />

        {/* Journal Entries Feed */}
        <div className="flex flex-col gap-6 mt-2">
          {entries.map((entry) => (
            <JournalEntryCard
              key={entry.id}
              entry={entry}
              onMenuClick={handleMenuClick}
            />
          ))}
        </div>

        {/* Action Button Floater (Secondary New Entry Access) */}
        <div className="fixed bottom-8 right-8">
          <button
            aria-label="New journal entry"
            onClick={() => {
              const el = document.getElementById("journal-entry");
              if (el) el.focus();
            }}
            className="w-14 h-14 rounded-full bg-linear-to-br from-[#002d1c] to-[#00452e] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group focus:outline-hidden"
          >
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </AppLayout>
  );
}
