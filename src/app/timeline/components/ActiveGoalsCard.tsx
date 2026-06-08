import { Download } from "lucide-react";

interface ActiveGoalsCardProps {
  onExport?: () => void;
}

export function ActiveGoalsCard({ onExport }: ActiveGoalsCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col gap-8">
      <h3 className="text-xs font-extrabold uppercase tracking-widest text-zinc-400">
        Active Goals
      </h3>

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
              <div
                key={i}
                className={`flex-1 rounded-full ${
                  v ? "bg-zinc-800" : "bg-zinc-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={onExport}
        className="w-full h-12 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold flex items-center justify-center gap-2 transition-all shadow-md group focus:outline-hidden"
      >
        <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        Export Timeline
      </button>
    </div>
  );
}
