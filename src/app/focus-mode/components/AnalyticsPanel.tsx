"use client";

import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

export type TimePeriod = "daily" | "weekly" | "monthly";

export interface ChartDataPoint {
  id: string;
  label: string;
  hours: number;
}

const DEFAULT_WEEKLY_DATA: ChartDataPoint[] = [
  { id: "week-0", label: "Mon", hours: 3.5 },
  { id: "week-1", label: "Tue", hours: 4.2 },
  { id: "week-2", label: "Wed", hours: 2.8 },
  { id: "week-3", label: "Thu", hours: 5.1 },
  { id: "week-4", label: "Fri", hours: 3.9 },
  { id: "week-5", label: "Sat", hours: 2.0 },
  { id: "week-6", label: "Sun", hours: 1.5 },
];

const DEFAULT_MONTHLY_DATA: ChartDataPoint[] = [
  { id: "month-0", label: "W1", hours: 18.5 },
  { id: "month-1", label: "W2", hours: 22.3 },
  { id: "month-2", label: "W3", hours: 19.7 },
  { id: "month-3", label: "W4", hours: 25.1 },
];

const DEFAULT_DAILY_BLOCKS = [
  "bg-zinc-800",
  "bg-zinc-800",
  "bg-[#afeeee]",
  "bg-[#e2e2e2]",
  "bg-[#e2e2e2]",
  "bg-[#e2e2e2]",
];

interface AnalyticsPanelProps {
  weeklyData?: ChartDataPoint[];
  monthlyData?: ChartDataPoint[];
  dailyFocusBlocks?: string[];
  onEndSession?: () => void;
}

export function AnalyticsPanel({
  weeklyData = DEFAULT_WEEKLY_DATA,
  monthlyData = DEFAULT_MONTHLY_DATA,
  dailyFocusBlocks = DEFAULT_DAILY_BLOCKS,
  onEndSession,
}: AnalyticsPanelProps) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("daily");

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
    <div className="shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-[#f4f4f4] min-h-[639px] flex flex-col gap-10 p-8">
      {/* Range Toggle */}
      <div className="flex items-start gap-2 text-sm text-zinc-500">
        {(["daily", "weekly", "monthly"] as TimePeriod[]).map((period) => (
          <button
            key={period}
            onClick={() => setTimePeriod(period)}
            className={`h-9 px-4 rounded-xl flex items-center justify-center font-semibold transition-all capitalize ${
              timePeriod === period
                ? "bg-zinc-800 text-white"
                : "bg-white hover:bg-zinc-50"
            }`}
          >
            {period}
          </button>
        ))}
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
              {dailyFocusBlocks.map((bgClass, idx) => (
                <div key={idx} className={`h-8 w-8 rounded ${bgClass}`} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 pt-4 border-t border-zinc-200">
            <b className="text-[10px] uppercase tracking-widest text-[#5c8d7e]">
              {timePeriod === "weekly" ? "HOURS PER DAY" : "HOURS PER WEEK"}
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
                <Bar dataKey="hours" fill="#18181b" radius={[4, 4, 0, 0]} />
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
          &quot;The session feels productive. Maintaining the &apos;no-line&apos;
          aesthetic is helping reduce visual noise.&quot;
          <div className="flex items-center gap-2 not-italic text-emerald-600 text-[10px] font-bold uppercase tracking-widest mt-1">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            CALM & STEADY
          </div>
        </div>
      </div>

      {/* End Session Button */}
      <button
        onClick={onEndSession}
        className="h-[92px] rounded-2xl relative overflow-hidden group mt-auto focus:outline-hidden"
      >
        <div className="absolute inset-0 bg-linear-to-br from-[#002d1c] to-[#00452e] group-hover:from-[#003d28] transition-all duration-500" />
        <div className="absolute top-3 -right-6 w-24 h-24 bg-white/10 blur-2xl rounded-full" />
        <div className="relative z-10 flex flex-col items-center justify-center p-6 gap-0.5">
          <b className="text-white text-base">End Daily Session</b>
          <span className="text-zinc-400 text-xs">Generate summary report</span>
        </div>
      </button>
    </div>
  );
}
