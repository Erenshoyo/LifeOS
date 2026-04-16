"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Flame,
  Trophy,
  BarChart3,
  Calendar,
  MoreHorizontal,
  Plus,
  Compass,
  Droplets,
  BookOpen,
  Dumbbell,
  PenTool,
  CheckCircle2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

// Fake data for the Weekly Activity Chart
const chartData = [
  { day: "Mon", count: 3 },
  { day: "Tue", count: 2 },
  { day: "Wed", count: 4 },
  { day: "Thu", count: 3 },
  { day: "Fri", count: 1 },
  { day: "Sat", count: 4 },
  { day: "Sun", count: 4 },
];



export default function HabitsPage() {
  return (
    <AppLayout title="Habits" subtitle="BUILD LASTING CONSISTENCY">
        <div className="flex flex-col gap-8 pb-12 font-inter mt-4">
        
        {/* Habit KPI Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Streak */}
          <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center gap-4 transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.04)]">
            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
              <Flame className="w-6 h-6 fill-orange-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-zinc-900 leading-tight">12</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Current Streak</span>
            </div>
          </div>

          {/* Longest Streak */}
          <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center gap-4 transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.04)]">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <Trophy className="w-6 h-6 fill-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-zinc-900 leading-tight">18</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Longest Streak</span>
            </div>
          </div>

          {/* Completion Rate */}
          <div className="bg-white rounded-2xl p-6 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 flex items-center gap-4 transition-all hover:shadow-[0px_12px_32px_rgba(25,28,29,0.04)]">
            <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-zinc-900 leading-tight">73%</span>
              <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Completion Rate</span>
            </div>
          </div>
        </div>

        {/* Weekly Activity Chart Card */}
        <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-zinc-900 font-manrope">Weekly Activity</h3>
            <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5" />
              This Week
            </div>
          </div>
          
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }} barCategoryGap="10%">
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="day" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: "#94a3b8", fontSize: 12, fontWeight: 600 }}
                  domain={[0, 4]}
                  ticks={[0, 1, 2, 3, 4]}
                />
                <Tooltip 
                  cursor={{ fill: "#f1f5f9", radius: 8 }}
                  contentStyle={{ 
                    borderRadius: "16px", 
                    border: "none", 
                    boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)",
                    padding: "12px"
                  }}
                />
                <Bar 
                  dataKey="count" 
                  radius={[20, 20, 20, 20]} 
                >
                  {chartData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.count >= 3 ? "#1a5f49" : "#86efac"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Today's Habits Grid */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-zinc-800 font-manrope">Today&apos;s Habits</h3>
            <button className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 hover:text-zinc-800 transition-colors uppercase tracking-widest">
              <Plus className="w-4 h-4" />
              Add Habit
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {/* Habit 1: Meditation */}
            <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-brand-dark">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-zinc-900">Morning Meditation</span>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
                      <span>85% this week</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span>Best: 18 days</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <Flame className="w-4 h-4 fill-orange-500" />
                    <span className="text-lg font-bold leading-none">12</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Day Streak</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Progress</span>
                  <span className="text-zinc-400">6 / 7 Days</span>
                </div>
                <div className="flex items-center gap-1.5 justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={day + i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`h-2 w-full rounded-full ${i === 3 ? 'bg-zinc-200' : 'bg-emerald-500'}`} />
                      <span className="text-[10px] font-bold text-zinc-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Habit 2: Water */}
            <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-blue-500">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-zinc-900">Drink 8 glasses of water</span>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
                      <span>78% this week</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span>Best: 14 days</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <Flame className="w-4 h-4 fill-orange-500" />
                    <span className="text-lg font-bold leading-none">5</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Day Streak</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Progress</span>
                  <span className="text-zinc-400">5 / 7 Days</span>
                </div>
                <div className="flex items-center gap-1.5 justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={day + i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`h-2 w-full rounded-full ${[2, 5].includes(i) ? 'bg-zinc-200' : 'bg-emerald-500'}`} />
                      <span className="text-[10px] font-bold text-zinc-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

             {/* Habit 3: Reading */}
             <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-indigo-500">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-zinc-900">Read for 30 minutes</span>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
                      <span>65% this week</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span>Best: 9 days</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <Flame className="w-4 h-4 fill-orange-500" />
                    <span className="text-lg font-bold leading-none">3</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Day Streak</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Progress</span>
                  <span className="text-zinc-400">3 / 7 Days</span>
                </div>
                <div className="flex items-center gap-1.5 justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={day + i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`h-2 w-full rounded-full ${[0, 3, 5, 6].includes(i) ? 'bg-zinc-200' : 'bg-emerald-500'}`} />
                      <span className="text-[10px] font-bold text-zinc-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Habit 4: Exercise */}
            <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-red-500">
                    <Dumbbell className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-zinc-900">Morning Exercise</span>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
                      <span>55% this week</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span>Best: 7 days</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <Flame className="w-4 h-4" />
                    <span className="text-lg font-bold leading-none text-zinc-400">0</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Day Streak</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Progress</span>
                  <span className="text-zinc-400">3 / 7 Days</span>
                </div>
                <div className="flex items-center gap-1.5 justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={day + i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`h-2 w-full rounded-full ${[1, 3, 4, 6].includes(i) ? 'bg-zinc-200' : 'bg-emerald-500'}`} />
                      <span className="text-[10px] font-bold text-zinc-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Habit 5: Journaling */}
            <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-6 flex flex-col gap-6 group hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)] transition-all">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 flex items-center justify-center text-brand-light">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-zinc-900">Daily Journal</span>
                    <div className="flex items-center gap-2 text-[11px] font-medium text-zinc-400">
                      <span>82% this week</span>
                      <span className="w-1 h-1 rounded-full bg-zinc-300" />
                      <span>Best: 15 days</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-0.5">
                  <div className="flex items-center gap-1.5 text-orange-500">
                    <Flame className="w-4 h-4 fill-orange-500" />
                    <span className="text-lg font-bold leading-none">8</span>
                  </div>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-tighter">Day Streak</span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                  <span>Progress</span>
                  <span className="text-zinc-400">6 / 7 Days</span>
                </div>
                <div className="flex items-center gap-1.5 justify-between">
                  {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                    <div key={day + i} className="flex-1 flex flex-col items-center gap-1.5">
                      <div className={`h-2 w-full rounded-full ${i === 5 ? 'bg-zinc-200' : 'bg-emerald-500'}`} />
                      <span className="text-[10px] font-bold text-zinc-400">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        </div>
    </AppLayout>
  );
}
