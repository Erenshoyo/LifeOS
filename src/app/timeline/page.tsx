"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Clock,
  CheckCircle2,
  Download,
  Flame,
  Target,
  PenTool,
  Droplets,
  Sprout,
  Sun,
  LayoutDashboard,
  Calendar,
  Share2,
  MoreVertical,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "boneyard-js/react";

const timelineEvents = [
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
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AppLayout title="Timeline" subtitle="YOUR JOURNEY TODAY">
      <Skeleton name="timeline" loading={isLoading}>
        <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 pb-12 font-inter mt-6">
        
        {/* Left Column: Timeline Chronicle */}
        <div className="flex flex-col gap-10">
          
          {/* Timeline Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-extrabold text-[#5c8d7e] uppercase tracking-widest">Thursday</span>
              <h2 className="text-3xl font-bold font-manrope text-zinc-900 leading-tight">Your Journey Today</h2>
              <p className="text-sm text-zinc-500 font-medium">A living chronicle of your intentions and accomplishments.</p>
            </div>
            
            {/* Toggle Switch */}
            <div className="bg-zinc-100 p-1 rounded-full flex items-center min-w-[250px]">
              {["Daily", "Weekly", "Monthly"].map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`flex-1 h-8 rounded-full text-xs font-bold transition-all px-4 ${
                    view === v ? "bg-white shadow-sm text-zinc-800" : "text-zinc-400 hover:text-zinc-600"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Vertical Guide Line */}
            <div className="absolute left-[7px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-transparent via-zinc-200 to-transparent" />

            <div className="flex flex-col gap-12">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative flex gap-10 items-start group">
                  {/* Timeline Node */}
                  <div className="mt-2 w-4 h-4 rounded-full bg-white border-2 border-zinc-200 relative z-10 transition-colors group-hover:border-zinc-800">
                     <div className="absolute inset-1 rounded-full bg-zinc-400 group-hover:bg-zinc-800 transition-colors" />
                  </div>

                  {/* Item Content */}
                  <div className="flex flex-col md:flex-row gap-8 flex-1">
                    {/* Time Label */}
                    <div className="w-24 shrink-0 pt-1">
                       <span className="block text-sm font-extrabold text-zinc-900 leading-none mb-1">{event.time}</span>
                       <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{event.label}</span>
                    </div>

                    {/* Card Container */}
                    <div className="flex-1 bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 p-6 flex flex-col gap-5 relative overflow-hidden transition-all hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)]">
                        {/* Type Label */}
                        <div className="flex items-center gap-2">
                            {event.type === 'journal' && <PenTool className="w-4 h-4 text-emerald-500" />}
                            {event.type === 'habit' && <Flame className="w-4 h-4 text-blue-500" />}
                            {event.type === 'task' && <Target className="w-4 h-4 text-zinc-500" />}
                            {event.type === 'inspiration' && <Sun className="w-4 h-4 text-indigo-500" />}
                            <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">{event.type.replace('-', ' ')}</span>
                        </div>

                        {/* Event Title */}
                        <h3 className="text-xl font-bold font-manrope text-zinc-900">{event.title}</h3>

                        {/* Specific Content per Type */}
                        {event.content && (
                            <p className="text-base font-medium italic text-zinc-500 leading-relaxed">
                                {event.content}
                            </p>
                        )}

                        {event.description && (
                            <p className="text-sm text-zinc-500 leading-relaxed pr-8">
                                {event.description}
                            </p>
                        )}

                        {event.type === 'habit' && (
                            <div className="flex flex-col gap-3 pt-2">
                                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                                   <span>Status</span>
                                   <span>{event.status}</span>
                                </div>
                                <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-zinc-800 w-full" />
                                </div>
                            </div>
                        )}

                        {/* Footer / Tags */}
                        <div className="flex flex-wrap items-center gap-2 mt-2">
                            {event.duration && (
                                <div className="flex items-center gap-1.5 text-zinc-400 text-[11px] font-bold uppercase mr-4">
                                     <Clock className="w-3.5 h-3.5" />
                                     <span>{event.duration}</span>
                                </div>
                            )}
                            {event.tags && event.tags.map(tag => (
                                <span key={tag} className="bg-zinc-50 text-zinc-500 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Summary & Goals */}
        <div className="flex flex-col gap-8">
            
            {/* Day Summary Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col gap-10">
                <div className="flex items-center gap-3">
                    <LayoutDashboard className="w-5 h-5 text-zinc-400" />
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#5c8d7e]">Day Summary</h3>
                </div>

                {/* Focus Circular Chart */}
                <div className="flex items-center gap-8">
                    <div className="relative w-20 h-20 flex items-center justify-center">
                        <svg className="w-full h-full -rotate-90">
                            <circle cx="40" cy="40" r="36" stroke="#f4f4f5" strokeWidth="6" fill="transparent" />
                            <circle 
                                cx="40" cy="40" r="36" stroke="#002d1c" strokeWidth="6" fill="transparent"
                                strokeDasharray="226" strokeDashoffset="56"
                            />
                        </svg>
                        <b className="absolute text-sm font-bold text-zinc-900">75%</b>
                    </div>
                    <div className="flex flex-col">
                        <b className="text-base font-bold text-zinc-900">Focus Achieved</b>
                        <span className="text-xs text-zinc-500">Strong progress today</span>
                    </div>
                </div>

                {/* Metric List */}
                <div className="flex flex-col gap-3">
                   {[
                     { label: "Tasks Done", val: "8/10", icon: CheckCircle2 },
                     { label: "Habits", val: "5/6", icon: Flame },
                     { label: "Journal Entries", val: "2", icon: PenTool }
                   ].map(stat => (
                     <div key={stat.label} className="bg-zinc-50 rounded-xl p-4 flex items-center justify-between group hover:bg-zinc-100/50 transition-all">
                        <div className="flex items-center gap-3 font-medium text-sm text-zinc-700">
                           <stat.icon className="w-4 h-4 text-zinc-400" />
                           {stat.label}
                        </div>
                        <b className="text-sm text-zinc-900">{stat.val}</b>
                     </div>
                   ))}
                </div>
            </div>

            {/* Active Goals Card */}
            <div className="bg-white rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col gap-8">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">Active Goals</h3>
                
                <div className="flex flex-col gap-6">
                    {/* Quarterly Goal */}
                    <div className="bg-zinc-50 rounded-2xl p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                             <b className="text-sm font-bold text-zinc-800">Quarterly Sprint</b>
                             <span className="text-[10px] font-bold text-zinc-400">68%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white rounded-full overflow-hidden">
                            <div className="h-full bg-zinc-800 w-[68%]" />
                        </div>
                    </div>

                    {/* Mindfulness Goal */}
                    <div className="bg-zinc-50 rounded-2xl p-4 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                             <b className="text-sm font-bold text-zinc-800">Daily Mindfulness</b>
                             <span className="text-[10px] font-bold text-zinc-400">18/30 days</span>
                        </div>
                        <div className="flex gap-1 h-1.5">
                            {[1, 2, 3, 4, 0, 0, 0].map((v, i) => (
                                <div key={i} className={`flex-1 rounded-full ${v ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                <button className="w-full h-12 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-md group">
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    Export Timeline
                </button>
            </div>

            {/* Sync Status Footer */}
            <div className="px-4 opacity-60 flex items-center gap-4 text-[11px] font-medium text-zinc-500">
                <span>Last synced: 5 minutes ago</span>
                <div className="w-1 h-1 rounded-full bg-zinc-300" />
                <span>Timeline auto-updating</span>
            </div>
        </div>

        </div>
      </Skeleton>
    </AppLayout>
  );
}
