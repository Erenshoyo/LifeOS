"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Plus,
  Clock,
  ArrowUpRight,
  CheckCheck,
  MoreHorizontal,
  Trash2,
  Inbox,
  CheckCircle2,
} from "lucide-react";
import { useState, useEffect } from "react";

const initialPending = [
  { id: 1, text: "Need to organize my notes better", time: "4/7/2026, 3:00:00 PM" },
  { id: 2, text: "Ideas for new project", time: "4/7/2026, 4:00:00 PM" },
  { id: 3, text: "Thoughts on personal development", time: "4/7/2026, 5:00:00 PM" },
];

const initialProcessed = [
  { id: 4, text: "Remember to update portfolio website", time: "4/6/2026, 9:30:00 PM" },
  { id: 5, text: "Book recommendations from John", time: "4/6/2026, 7:00:00 PM" },
];

import { Skeleton } from "boneyard-js/react";

export default function BrainDumpPage() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const [input, setInput] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // Logic would go here to add item
      setInput("");
    }
  };

  return (
    <AppLayout title="Brain Dump" subtitle="CLEAR YOUR MIND">
      <Skeleton name="brain-dump" loading={isLoading}>
        <div className="flex flex-col gap-10 pb-12 font-inter mt-6">
        
        {/* Quick Capture Card */}
        <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What's on your mind? Press Enter to add..."
                className="w-full h-12 bg-white border border-zinc-200 rounded-xl px-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#1a5f49]/20 focus:border-[#1a5f49] transition-all"
              />
            </div>
            <button className="bg-[#1a5f49] hover:bg-[#154a39] text-white h-12 px-6 rounded-xl text-sm font-bold shadow-[0px_4px_12px_rgba(26,95,73,0.1)] transition-all flex items-center gap-2 shrink-0">
              <Plus className="w-5 h-5" />
              Add
            </button>
          </div>
        </div>

        {/* Sections Container */}
        <div className="flex flex-col gap-10">
          
          {/* To Process Section */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <Inbox className="w-5 h-5 text-zinc-400" />
                <h3 className="text-lg font-bold font-manrope text-zinc-800">To Process</h3>
                <span className="bg-zinc-100 text-zinc-500 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">
                  {initialPending.length}
                </span>
              </div>
              <button className="text-xs font-bold text-zinc-400 hover:text-zinc-600 uppercase tracking-widest transition-colors">
                Process All
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {initialPending.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-2xl p-5 shadow-[0px_1px_2px_rgba(0,0,0,0.04)] border border-zinc-100 flex items-start justify-between group hover:shadow-[0px_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-[15px] font-semibold text-zinc-900 leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-1.5 text-zinc-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium tracking-tight">{item.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-[#1a5f49] transition-colors" title="Convert to Task">
                      <ArrowUpRight className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-emerald-500 transition-colors" title="Mark Processed">
                      <CheckCircle2 className="w-5 h-5" />
                    </button>
                    <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-400 hover:text-zinc-600 transition-colors">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Processed Section */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 px-2">
              <CheckCheck className="w-5 h-5 text-zinc-400" />
              <h3 className="text-lg font-bold font-manrope text-zinc-800">Processed</h3>
              <span className="bg-zinc-100 text-zinc-400 text-[11px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tight">
                {initialProcessed.length}
              </span>
            </div>

            <div className="flex flex-col gap-3">
              {initialProcessed.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white/60 backdrop-blur-[2px] rounded-2xl p-5 border border-zinc-100 flex items-start justify-between group opacity-70 hover:opacity-100 transition-all"
                >
                  <div className="flex flex-col gap-2">
                    <p className="text-[15px] font-medium text-zinc-500 line-through decoration-zinc-300 leading-relaxed">
                      {item.text}
                    </p>
                    <div className="flex items-center gap-1.5 text-zinc-300">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[11px] font-medium tracking-tight">{item.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-300 hover:text-red-400 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        </div>
      </Skeleton>
    </AppLayout>
  );
}
