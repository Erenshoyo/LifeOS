"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Clock,
  Circle,
  CheckCircle2,
  Calendar,
  Zap,
  Shield,
  User,
  MoreHorizontal,
  CloudLightning,
  AlertCircle,
  CheckCircle,
} from "lucide-react";



export default function TasksPage() {
  return (
    <AppLayout title="Tasks" subtitle="MANAGE YOUR FOCUS">
        <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        {/* Hero & Pending Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Current Focus Hero Card (Span 2) */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl p-8 shadow-[0px_12px_48px_rgba(0,45,28,0.15)] bg-gradient-to-br from-[#002d1c] to-[#00452e] text-white flex items-center justify-between group">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none group-hover:bg-white/10 transition-all duration-700" />
            
            <div className="relative z-10 flex flex-col gap-2 max-w-[70%]">
              <div className="flex items-center gap-2 opacity-70">
                <Zap className="w-3.5 h-3.5 fill-darkseagreen text-darkseagreen" />
                <span className="text-[10px] tracking-[1.8px] font-bold uppercase">
                  CURRENT FOCUS
                </span>
              </div>
              <h2 className="text-[28px] md:text-[32px] font-extrabold font-manrope leading-tight mt-1">
                Quarterly Productivity Review
              </h2>
              <p className="text-honeydew/80 text-sm md:text-base leading-relaxed mt-1">
                Focus on high-leverage activities and clear the backlog before Friday.
              </p>
            </div>

            <div className="relative z-10 flex flex-col items-end gap-1 text-right min-w-[100px]">
              <div className="text-[42px] md:text-[48px] font-extrabold leading-none tracking-tighter">
                82%
              </div>
              <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider opacity-70">
                Weekly Goal
              </div>
            </div>
          </div>

          {/* Pending Tasks KPI Card */}
          <div className="bg-white rounded-2xl p-8 shadow-[0px_12px_32px_rgba(25,28,29,0.04)] border border-zinc-100 flex flex-col justify-between transition-all hover:shadow-[0px_12px_48px_rgba(25,28,29,0.08)]">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-xl bg-cyan-50 text-cyan-600">
                <Calendar className="w-6 h-6" />
              </div>
              <div className="bg-cyan-50 text-cyan-700 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Priority
              </div>
            </div>
            <div className="flex flex-col gap-1 mt-6">
              <div className="text-[36px] font-extrabold text-zinc-900 leading-none">
                3
              </div>
              <div className="text-sm font-medium text-zinc-500">
                Pending Tasks Today
              </div>
            </div>
          </div>
        </div>

        {/* Today's Focus List */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-extrabold font-manrope text-zinc-800 tracking-tight">
                Today&apos;s Focus
              </h3>
              <div className="bg-red-50 text-red-600 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest border border-red-100">
                CRITICAL
              </div>
            </div>
            <button
              type="button"
              aria-label="View all tasks"
              className="text-xs font-bold text-zinc-400 hover:text-zinc-600 transition-colors uppercase tracking-wider"
            >
              View All
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-[0px_4px_24px_rgba(0,0,0,0.02)] border border-zinc-100 divide-y divide-zinc-50 overflow-hidden">
            {/* Task 1 */}
            <div className="flex items-center justify-between p-6 hover:bg-zinc-50/50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-6">
                <div className="w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-zinc-400 transition-colors" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold text-zinc-900">Draft Q3 Financial Roadmap</span>
                  <span className="text-[12px] text-zinc-500 font-medium">High-level strategic planning for upcoming investments</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                <Clock className="w-3.5 h-3.5" />
                10:30 AM
              </div>
            </div>

            {/* Task 2 */}
            <div className="flex items-center justify-between p-6 hover:bg-zinc-50/50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-6">
                <div className="w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-zinc-400 transition-colors" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold text-zinc-900">Team Feedback Synthesis</span>
                  <span className="text-[12px] text-zinc-500 font-medium">Categorize survey results into actionable items</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[11px] font-bold">
                <Clock className="w-3.5 h-3.5" />
                01:00 PM
              </div>
            </div>

            {/* Task 3 */}
            <div className="flex items-center justify-between p-6 hover:bg-zinc-50/50 transition-colors group cursor-pointer">
              <div className="flex items-center gap-6">
                <div className="w-6 h-6 rounded-full border-2 border-zinc-300 group-hover:border-zinc-400 transition-colors" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold text-zinc-900">Monthly Maintenance Schedule</span>
                  <span className="text-[12px] text-zinc-500 font-medium">Review and update automated system scripts</span>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 text-zinc-500 text-[11px] font-bold">
                <Clock className="w-3.5 h-3.5" />
                04:30 PM
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-extrabold font-manrope text-zinc-800 tracking-tight">
            Upcoming & Secondary
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Personal Growth Card */}
            <div className="bg-zinc-100/50 p-8 rounded-2xl border-l-[4px] border-zinc-400 border border-zinc-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[1.2px] text-zinc-500">Personal Growth</span>
                <User className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">Complete &apos;Mindful Leadership&apos; Module 3</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">Review annual reading list targets</span>
                </div>
              </div>
            </div>

            {/* Infrastructure Card */}
            <div className="bg-zinc-100/50 p-8 rounded-2xl border-l-[4px] border-emerald-400 border border-zinc-100 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[1.2px] text-zinc-500">Infrastructure</span>
                <Shield className="w-4 h-4 text-zinc-400" />
              </div>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">Archive old project folders from NAS</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-sm font-medium text-zinc-700">Update workspace security protocols</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sync Status Footer */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pt-6 border-t border-zinc-200 text-xs text-zinc-400 font-medium">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <CloudLightning className="w-3.5 h-3.5" />
              Last synced: 2 minutes ago
            </div>
            <div className="w-1 h-1 rounded-full bg-zinc-300" />
            <div className="flex items-center gap-1.5 text-zinc-500">
              Offline mode active
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-zinc-600">Privacy</span>
            <span className="cursor-pointer hover:text-zinc-600">Terms</span>
          </div>
        </div>
        </div>
    </AppLayout>
  );
}
