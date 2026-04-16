"use client";

import { AppLayout } from "@/components/AppLayout";
import {
  Play,
  Pause,
  CloudRain,
  Trees,
  Coffee,
  Plus,
  Settings,
  Clock,
  Flag,
  RotateCcw,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Skeleton } from "boneyard-js/react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

type TimePeriod = "daily" | "weekly" | "monthly";

interface ChartDataPoint {
  id: string;
  label: string;
  hours: number;
}

export default function FocusModePage() {
  // Timer State
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  // UI State
  const [isMixAudioOpen, setIsMixAudioOpen] = useState(false);

  // Timer Logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsActive(false);
      setTimeLeft(1500); // Reset but don't auto-start
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  // Formatting minutes/seconds
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(1500);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const [timePeriod, setTimePeriod] = useState<TimePeriod>("daily");

  const weeklyData: ChartDataPoint[] = [
    { id: "week-0", label: "Mon", hours: 3.5 },
    { id: "week-1", label: "Tue", hours: 4.2 },
    { id: "week-2", label: "Wed", hours: 2.8 },
    { id: "week-3", label: "Thu", hours: 5.1 },
    { id: "week-4", label: "Fri", hours: 3.9 },
    { id: "week-5", label: "Sat", hours: 2.0 },
    { id: "week-6", label: "Sun", hours: 1.5 },
  ];

  const monthlyData: ChartDataPoint[] = [
    { id: "month-0", label: "W1", hours: 18.5 },
    { id: "month-1", label: "W2", hours: 22.3 },
    { id: "month-2", label: "W3", hours: 19.7 },
    { id: "month-3", label: "W4", hours: 25.1 },
  ];

  const getStatsForPeriod = () => {
    if (timePeriod === "weekly") {
      const totalHours = weeklyData.reduce((sum, d) => sum + d.hours, 0);
      return {
        totalFocus: `${totalHours.toFixed(1)}h`,
        efficiency: "87%",
      };
    } else if (timePeriod === "monthly") {
      const totalHours = monthlyData.reduce((sum, d) => sum + d.hours, 0);
      return {
        totalFocus: `${totalHours.toFixed(1)}h`,
        efficiency: "85%",
      };
    }
    return {
      totalFocus: "3h 15m",
      efficiency: "84%",
    };
  };

  const stats = getStatsForPeriod();

  return (
    <AppLayout title="Focus Mode" subtitle="DEEP WORK SESSION">
      <Skeleton name="focus-mode" loading={isLoading}>
        <div className="flex flex-col lg:grid lg:grid-cols-[1.5fr_1fr] gap-12 font-inter mt-6">
          {/* Main Focus Area (Left) */}
          <div className="flex flex-col gap-12">
            {/* Top Row: Timer and Ambient Sound */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Timer Card (Strict Figma Implementation) */}
              <div className="flex-1 shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-white overflow-hidden text-center min-h-[552px] relative group">
                {/* Dark Overly Container */}
                <div className="absolute inset-0 bg-[#1e292d] transition-colors duration-700" />

                <div className="relative z-10 flex flex-col items-center pt-12 gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <b className="tracking-[2.4px] leading-4 uppercase text-[#5c8d7e] text-xs">
                      CURRENT SESSION
                    </b>
                  </div>

                  {/* Animated Timer Display */}
                  <div className="relative w-80 h-80 flex items-center justify-center">
                    {/* Progress Circle Visual */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="160"
                        cy="160"
                        r="150"
                        stroke="#2d3748"
                        strokeWidth="4"
                        fill="transparent"
                      />
                      <circle
                        cx="160"
                        cy="160"
                        r="150"
                        stroke="#5c8d7e"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray="942"
                        strokeDashoffset={942 - 942 * (timeLeft / 1500)}
                        className="transition-all duration-1000 linear"
                      />
                    </svg>

                    <div className="relative z-20 flex flex-col items-center">
                      <div className="text-[72px] tracking-[-3.6px] leading-[72px] font-extrabold text-[#8a999c] tabular-nums">
                        {formatTime(timeLeft)}
                      </div>
                      <div className="text-sm text-[#4a5568] font-medium mt-2">
                        remaining
                      </div>
                    </div>
                  </div>

                  {/* Timer Controls */}
                  <div className="flex items-center justify-center gap-4">
                    <button
                      onClick={toggleTimer}
                      className="h-12 min-w-[197px] shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-full bg-linear-to-br from-[#002d1c] to-[#00452e] flex items-center justify-center py-0 px-8 gap-2 group hover:scale-[1.02] transition-all"
                    >
                      {isActive ? (
                        <Pause className="w-5 h-5 text-white fill-white" />
                      ) : (
                        <Play className="w-5 h-5 text-white fill-white" />
                      )}
                      <b className="text-white leading-6 text-base">
                        {isActive ? "Pause Session" : "Start Session"}
                      </b>
                    </button>

                    <button
                      onClick={resetTimer}
                      className="h-12 w-12 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-zinc-200 transition-colors"
                    >
                      <RotateCcw className="w-5 h-5 text-zinc-500" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Ambient Sound Card (Strict Figma Implementation) */}
              <div className="w-full md:w-[373.3px] shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-[#f4f4f4] p-6 flex flex-col gap-6 relative">
                <div className="flex items-center justify-between text-[18px] font-manrope">
                  <b className="leading-[27px] text-zinc-800">Ambient Sound</b>
                  <Settings className="h-5 w-5 text-zinc-400" />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  {/* Midnight Rain */}
                  <div className="rounded-xl bg-white flex items-center py-0 px-4 h-[72px] gap-4 shadow-sm border border-zinc-100 transition-all hover:border-emerald-200 group cursor-pointer">
                    <div className="h-10 w-10 rounded-[10px] bg-[#afeeee] flex items-center justify-center">
                      <CloudRain className="h-5 w-5 text-zinc-700" />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="leading-5 font-semibold text-zinc-800">
                        Midnight Rain
                      </div>
                      <div className="h-1 rounded-full bg-[#e2e8f0] overflow-hidden">
                        <div className="h-full bg-zinc-800 w-[65%]" />
                      </div>
                    </div>
                  </div>

                  {/* Green Forest */}
                  <div className="rounded-xl bg-[#e5e7eb] flex items-center py-0 px-4 h-[72px] gap-4 transition-all hover:bg-zinc-200 cursor-pointer">
                    <div className="h-10 w-10 rounded-[10px] bg-[#f4f4f4] flex items-center justify-center">
                      <Trees className="h-5 w-5 text-zinc-500" />
                    </div>
                    <div className="leading-5 font-semibold text-zinc-600">
                      Green Forest
                    </div>
                  </div>

                  {/* Quiet Cafe */}
                  <div className="rounded-xl bg-[#e5e7eb] flex items-center py-0 px-4 h-[72px] gap-4 transition-all hover:bg-zinc-200 cursor-pointer">
                    <div className="h-10 w-10 rounded-[10px] bg-[#f4f4f4] flex items-center justify-center">
                      <Coffee className="h-5 w-5 text-zinc-500" />
                    </div>
                    <div className="leading-5 font-semibold text-zinc-600">
                      Quiet Cafe
                    </div>
                  </div>
                </div>

                {/* Mix Audio Trigger */}
                <button
                  onClick={() => setIsMixAudioOpen(true)}
                  className="h-[38px] rounded-xl border border-zinc-300 flex items-center justify-center hover:bg-white transition-all"
                >
                  <b className="leading-5 text-sm text-zinc-600">Mix Audio</b>
                </button>

                {/* Mock Audio Mixer View */}
                {isMixAudioOpen && (
                  <div className="absolute inset-0 bg-[#f4f4f4] rounded-2xl p-6 z-20 flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center justify-between">
                      <b className="text-[18px] font-manrope text-zinc-800">
                        Audio Mixer
                      </b>
                      <button
                        onClick={() => setIsMixAudioOpen(false)}
                        className="p-1 hover:bg-zinc-200 rounded-lg"
                      >
                        <X className="w-5 h-5 text-zinc-500" />
                      </button>
                    </div>
                    <div className="flex flex-col gap-8 pt-4">
                      {["Rain", "Forest", "Cafe"].map((sound) => (
                        <div key={sound} className="flex flex-col gap-3">
                          <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-400">
                            <span>{sound} Content</span>
                            <span>70%</span>
                          </div>
                          <input
                            type="range"
                            className="w-full accent-[#002d1c]"
                            defaultValue={70}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Section: Intentions */}
            <div className="flex flex-col gap-6">
              <div className="flex items-end justify-between px-2">
                <div className="flex flex-col gap-1">
                  <b className="tracking-[1px] leading-[15px] uppercase text-xs text-[#5c8d7e]">
                    INTENTION
                  </b>
                  <b className="leading-8 text-2xl font-manrope text-zinc-800">
                    Active Focus Tasks
                  </b>
                </div>
                <button className="flex items-center gap-1.5 text-sm font-semibold text-zinc-600 hover:text-zinc-900 transition-colors">
                  <Plus className="w-4 h-4" />
                  Add Task
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {/* Main Focus Task */}
                <div className="shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-white border-l-4 border-zinc-800 p-6 flex flex-col gap-4 transition-all hover:shadow-[0px_16px_40px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded border-2 border-zinc-800 w-6 h-6 shrink-0" />
                    <div className="flex-1 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <b className="text-lg font-manrope leading-7 text-zinc-800 tracking-tight">
                          Finalize Q3 Design System documentation
                        </b>
                        <div className="rounded-[4px] bg-[#2d3748] py-1 px-2 text-[10px] font-bold text-white uppercase tracking-tight">
                          TOP PRIORITY
                        </div>
                      </div>
                      <p className="text-zinc-500 text-sm leading-relaxed max-w-[659px]">
                        Reviewing the &quot;No-Line&quot; rule implementation
                        and verifying all surface tokens are applied across the
                        dashboard views.
                      </p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
                          <Clock className="w-3 h-3" />
                          <span>45m</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-xs font-medium">
                          <Flag className="w-3 h-3" />
                          <span>Work</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secondary Task */}
                <div className="bg-[#f2f2f2] rounded-2xl p-6 flex items-start gap-4 transition-all opacity-80 hover:opacity-100">
                  <div className="mt-1 rounded border-2 border-[#c1c8c2] w-6 h-6 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <b className="leading-6 font-semibold text-zinc-700">
                      Update brand anchor components JSON
                    </b>
                    <p className="text-sm text-zinc-500">
                      Sync new styling keys for the navigation sidebar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Analytics Panel (Strict Figma Implementation) */}
          <div className="shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-[#f4f4f4] min-h-[639px] flex flex-col gap-10 p-8">
            {/* Range Toggle */}
            <div className="flex items-start gap-2 text-sm text-zinc-500">
              <button
                onClick={() => setTimePeriod("daily")}
                className={`h-9 px-4 rounded-xl flex items-center justify-center font-semibold transition-all ${
                  timePeriod === "daily"
                    ? "bg-zinc-800 text-white"
                    : "bg-white hover:bg-zinc-50"
                }`}
              >
                Daily
              </button>
              <button
                onClick={() => setTimePeriod("weekly")}
                className={`h-9 px-4 rounded-xl flex items-center justify-center font-semibold transition-all ${
                  timePeriod === "weekly"
                    ? "bg-zinc-800 text-white"
                    : "bg-white hover:bg-zinc-50"
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => setTimePeriod("monthly")}
                className={`h-9 px-4 rounded-xl flex items-center justify-center font-semibold transition-all ${
                  timePeriod === "monthly"
                    ? "bg-zinc-800 text-white"
                    : "bg-white hover:bg-zinc-50"
                }`}
              >
                Monthly
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <b className="text-[18px] font-manrope leading-[27px] text-zinc-800">
                {timePeriod === "daily" && "Today's Progress"}
                {timePeriod === "weekly" && "This Week's Progress"}
                {timePeriod === "monthly" && "This Month's Progress"}
              </b>

              {timePeriod === "daily" ? (
                <div className="flex flex-col gap-3 pt-4 border-t border-zinc-200">
                  <b className="text-[10px] uppercase tracking-widest text-[#5c8d7e]">
                    FOCUS BLOCKS
                  </b>
                  <div className="flex items-start gap-2">
                    <div className="h-8 w-8 rounded bg-zinc-800" />
                    <div className="h-8 w-8 rounded bg-zinc-800" />
                    <div className="h-8 w-8 rounded bg-[#afeeee]" />
                    <div className="h-8 w-8 rounded bg-[#e2e2e2]" />
                    <div className="h-8 w-8 rounded bg-[#e2e2e2]" />
                    <div className="h-8 w-8 rounded bg-[#e2e2e2]" />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-4 border-t border-zinc-200">
                  <b className="text-[10px] uppercase tracking-widest text-[#5c8d7e]">
                    {timePeriod === "weekly"
                      ? "HOURS PER DAY"
                      : "HOURS PER WEEK"}
                  </b>
                  <ResponsiveContainer width="100%" height={120}>
                    <BarChart
                      key={timePeriod}
                      data={timePeriod === "weekly" ? weeklyData : monthlyData}
                      margin={{ top: 10, right: 10, left: -20, bottom: 5 }}
                    >
                      <XAxis
                        dataKey="label"
                        tick={{ fontSize: 10, fill: "#71717a" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tick={{ fontSize: 10, fill: "#71717a" }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <Bar
                        dataKey="hours"
                        fill="#18181b"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              <div className="grid grid-cols-2 pt-6 gap-6">
                <div className="flex flex-col">
                  <b className="text-[10px] uppercase tracking-widest text-[#5c8d7e]">
                    TOTAL FOCUS
                  </b>
                  <b className="text-2xl font-manrope leading-8 text-zinc-800">
                    {stats.totalFocus}
                  </b>
                </div>
                <div className="flex flex-col text-right">
                  <b className="text-[10px] uppercase tracking-widest text-[#5c8d7e]">
                    EFFICIENCY
                  </b>
                  <b className="text-2xl font-manrope leading-8 text-zinc-600">
                    {stats.efficiency}
                  </b>
                </div>
              </div>
            </div>

            {/* Mindset Check-in */}
            <div className="pt-8 border-t border-zinc-200 flex flex-col gap-4">
              <b className="text-[10px] uppercase tracking-widest text-[#5c8d7e]">
                MINDSET CHECK-IN
              </b>
              <div className="bg-white rounded-xl p-4 flex flex-col gap-3 shadow-sm italic text-zinc-500 text-sm leading-relaxed">
                &quot;The session feels productive. Maintaining the
                &apos;no-line&apos; aesthetic is helping reduce visual
                noise.&quot;
                <div className="flex items-center gap-2 not-italic text-emerald-600 text-[10px] font-bold uppercase tracking-widest mt-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  CALM & STEADY
                </div>
              </div>
            </div>

            {/* End Session Button */}
            <button className="h-[92px] rounded-2xl relative overflow-hidden group mt-auto">
              <div className="absolute inset-0 bg-linear-to-br from-[#002d1c] to-[#00452e] group-hover:from-[#003d28] transition-all duration-500" />
              <div className="absolute top-3 -right-6 w-24 h-24 bg-white/10 blur-2xl rounded-full" />
              <div className="relative z-10 flex flex-col items-center justify-center p-6 gap-0.5">
                <b className="text-white text-base">End Daily Session</b>
                <span className="text-zinc-400 text-xs">
                  Generate summary report
                </span>
              </div>
            </button>
          </div>
        </div>
      </Skeleton>
    </AppLayout>
  );
}
