import { Calendar } from "lucide-react";
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

export interface ActivityDataPoint {
  day: string;
  count: number;
}

interface WeeklyActivityChartProps {
  data: ActivityDataPoint[];
}

export function WeeklyActivityChart({ data }: WeeklyActivityChartProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.1)] border border-zinc-100 p-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-zinc-900 font-manrope">
          Weekly Activity
        </h3>
        <div className="text-xs font-semibold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
          <Calendar className="w-3.5 h-3.5" />
          This Week
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            barCategoryGap="10%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f1f5f9"
            />
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
                padding: "12px",
              }}
            />
            <Bar dataKey="count" radius={[20, 20, 20, 20]}>
              {data.map((entry, index) => (
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
  );
}
