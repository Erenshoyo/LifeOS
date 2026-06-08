import { Play, Pause, RotateCcw } from "lucide-react";

interface TimerCardProps {
  timeLeft: number;
  isActive: boolean;
  onToggle: () => void;
  onReset: () => void;
  totalSeconds?: number;
}

export function TimerCard({
  timeLeft,
  isActive,
  onToggle,
  onReset,
  totalSeconds = 1500,
}: TimerCardProps) {
  // Formatting minutes/seconds
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex-1 shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-white overflow-hidden text-center min-h-[552px] relative group">
      {/* Dark Overlay Container */}
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
              strokeDashoffset={942 - 942 * (timeLeft / totalSeconds)}
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
            onClick={onToggle}
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
            onClick={onReset}
            className="h-12 w-12 rounded-full bg-[#f4f4f4] flex items-center justify-center hover:bg-zinc-200 transition-colors"
          >
            <RotateCcw className="w-5 h-5 text-zinc-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
