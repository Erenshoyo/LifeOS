import { Zap } from "lucide-react";

interface CurrentFocusCardProps {
  title: string;
  description: string;
  progress: number;
  goalLabel: string;
}

export function CurrentFocusCard({
  title,
  description,
  progress,
  goalLabel,
}: CurrentFocusCardProps) {
  return (
    <div className="lg:col-span-2 relative overflow-hidden rounded-2xl p-8 shadow-[0px_12px_48px_rgba(0,45,28,0.15)] bg-linear-to-br from-[#002d1c] to-[#00452e] text-white flex items-center justify-between group">
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
          {title}
        </h2>
        <p className="text-honeydew/80 text-sm md:text-base leading-relaxed mt-1">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-end gap-1 text-right min-w-[100px]">
        <div className="text-[42px] md:text-[48px] font-extrabold leading-none tracking-tighter">
          {progress}%
        </div>
        <div className="text-[10px] md:text-xs font-medium uppercase tracking-wider opacity-70">
          {goalLabel}
        </div>
      </div>
    </div>
  );
}
