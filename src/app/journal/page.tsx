"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Image as ImageIcon,
  Mic,
  Link as LinkIcon,
  Smile,
  Paperclip,
  MoreVertical,
  MoreHorizontal,
  Search,
  Plus,
  Settings,
  HelpCircle,
  Clock,
  MessageSquare,
  FileImage,
} from "lucide-react";
import Image from "next/image";



export default function JournalPage() {
  return (
    <AppLayout title="Journal" subtitle="REFLECT AND CAPTURE">
        <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* New Entry Editor Card */}
        <div className="bg-white rounded-2xl shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_48px_rgba(25,28,29,0.06)] transition-all">
          <label htmlFor="journal-entry" className="sr-only">Journal entry</label>
          <textarea
            id="journal-entry"
            className="w-full text-zinc-700 font-medium bg-transparent resize-none outline-none focus:ring-0 placeholder:text-zinc-400 placeholder:font-normal leading-relaxed text-base min-h-[120px]"
            placeholder="Write your thoughts... Use **markdown** for formatting"
          />

          <div className="flex items-center justify-between pt-5 border-t border-zinc-50">
            <div className="flex items-center gap-2">
              <button aria-label="Insert image" className="p-2.5 rounded-xl hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-all">
                <ImageIcon className="w-5 h-5" />
              </button>
              <button aria-label="Start recording" className="p-2.5 rounded-xl hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-all">
                <Mic className="w-5 h-5" />
              </button>
              <button aria-label="Add link" className="p-2.5 rounded-xl hover:bg-zinc-50 text-zinc-400 hover:text-zinc-600 transition-all">
                <LinkIcon className="w-5 h-5" />
              </button>
            </div>

            <button className="bg-[#1a5f49] hover:bg-[#154a39] text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-[0px_4px_12px_rgba(26,95,73,0.15)] hover:shadow-[0px_6px_16px_rgba(26,95,73,0.25)] hover:-translate-y-0.5 transition-all">
              Add Entry
            </button>
          </div>
        </div>

        {/* Journal Entries Feed */}
        <div className="flex flex-col gap-6 mt-2">
          {/* Entry 1 */}
          <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-zinc-900 font-manrope">
                    Morning Reflection
                  </h3>
                  <span className="text-xl">😊</span>
                </div>
                <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  Tuesday, April 7, 2026 at 6:00 AM
                </div>
              </div>
              <button className="text-zinc-300 hover:text-zinc-500">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <p className="text-zinc-600 leading-relaxed">
              Started the day feeling energized. Morning meditation really
              helps. Need to remember to{" "}
              <strong className="text-zinc-900 font-semibold">call mom</strong>{" "}
              about her birthday plans. Also want to research some meditation
              apps.
            </p>
          </div>

          {/* Entry 2 */}
          <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col overflow-hidden">
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-zinc-900 font-manrope">
                      Team Meeting Notes
                    </h3>
                    <span className="text-xl">💪</span>
                  </div>
                  <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Tuesday, April 7, 2026 at 6:00 AM
                  </div>
                </div>
                <button className="text-zinc-300 hover:text-zinc-500">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Had a productive meeting with the team. We discussed the Q2
                strategy and everyone is aligned. Feeling good about the
                direction we&apos;re heading.
              </p>
            </div>
            {/* Attachment Footer */}
            <div className="px-6 py-4 bg-zinc-50/50 border-t border-zinc-50 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-zinc-100 text-[11px] font-bold text-zinc-500 shadow-sm">
                <Mic className="w-3.5 h-3.5" />
                Voice note
              </div>
            </div>
          </div>

          {/* Entry 3 */}
          <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col overflow-hidden">
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-zinc-900 font-manrope">
                      Weekend Reflection
                    </h3>
                    <span className="text-xl">📚</span>
                  </div>
                  <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    Monday, April 6, 2026 at 6:00 AM
                  </div>
                </div>
                <button className="text-zinc-300 hover:text-zinc-500">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <p className="text-zinc-600 leading-relaxed">
                Reflecting on the weekend. Spent quality time with family and
                got some good reading done.{" "}
                <strong className="text-zinc-900 font-semibold">
                  &quot;Atomic Habits&quot;
                </strong>{" "}
                is really insightful. Planning to implement some of the concepts
                this week.
              </p>
            </div>
            {/* Attachment Footer */}
            <div className="px-6 py-4 bg-zinc-50/50 border-t border-zinc-50 flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-zinc-100 text-[11px] font-bold text-zinc-500 shadow-sm">
                <ImageIcon className="w-3.5 h-3.5" />
                Image attached
              </div>
            </div>
          </div>

          {/* Entry 4 */}
          <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 p-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <h3 className="text-lg font-bold text-zinc-900 font-manrope">
                    Morning Run
                  </h3>
                  <span className="text-xl">🏃</span>
                </div>
                <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  Monday, April 6, 2026 at 6:00 AM
                </div>
              </div>
              <button className="text-zinc-300 hover:text-zinc-500">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>
            <p className="text-zinc-600 leading-relaxed">
              Beautiful morning run. The weather is perfect. Feeling grateful
              for my health and the ability to move. Goal: run 3 times this
              week.
            </p>
          </div>
        </div>

        {/* Action Button Floater (Secondary New Entry Access) */}
        <div className="fixed bottom-8 right-8">
          <button aria-label="New journal entry" className="w-14 h-14 rounded-full bg-gradient-to-br from-[#002d1c] to-[#00452e] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group">
            <Plus className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
        </div>
    </AppLayout>
  );
}
