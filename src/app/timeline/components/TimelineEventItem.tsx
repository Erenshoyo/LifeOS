import { Clock, Flame, Target, PenTool, Sun } from "lucide-react";

export interface TimelineEvent {
  time: string;
  label: string;
  type: "journal" | "habit" | "task" | "inspiration";
  title: string;
  content?: string;
  description?: string;
  progress?: number;
  status?: string;
  duration?: string;
  tags?: string[];
  color: string;
}

interface TimelineEventItemProps {
  event: TimelineEvent;
}

export function TimelineEventItem({ event }: TimelineEventItemProps) {
  // Determine icon component
  const getIcon = () => {
    switch (event.type) {
      case "journal":
        return <PenTool className="w-4 h-4 text-emerald-500" />;
      case "habit":
        return <Flame className="w-4 h-4 text-blue-500" />;
      case "task":
        return <Target className="w-4 h-4 text-zinc-500" />;
      case "inspiration":
        return <Sun className="w-4 h-4 text-indigo-500" />;
    }
  };

  return (
    <div className="relative flex gap-10 items-start group">
      {/* Timeline Node */}
      <div className="mt-2 w-4 h-4 rounded-full bg-white border-2 border-zinc-200 relative z-10 transition-colors group-hover:border-zinc-800">
        <div className="absolute inset-1 rounded-full bg-zinc-400 group-hover:bg-zinc-800 transition-colors" />
      </div>

      {/* Item Content */}
      <div className="flex flex-col md:flex-row gap-8 flex-1">
        {/* Time Label */}
        <div className="w-24 shrink-0 pt-1">
          <span className="block text-sm font-extrabold text-zinc-900 leading-none mb-1">
            {event.time}
          </span>
          <span className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest text-wrap break-all">
            {event.label}
          </span>
        </div>

        {/* Card Container */}
        <div className="flex-1 bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 p-6 flex flex-col gap-5 relative overflow-hidden transition-all hover:shadow-[0px_12px_32px_rgba(0,0,0,0.04)]">
          {/* Type Label */}
          <div className="flex items-center gap-2">
            {getIcon()}
            <span className="text-[10px] font-extrabold text-zinc-400 uppercase tracking-widest">
              {event.type.replace("-", " ")}
            </span>
          </div>

          {/* Event Title */}
          <h3 className="text-xl font-bold font-manrope text-zinc-900">
            {event.title}
          </h3>

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

          {event.type === "habit" && (
            <div className="flex flex-col gap-3 pt-2">
              <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                <span>Status</span>
                <span>{event.status}</span>
              </div>
              <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-zinc-800 rounded-full"
                  style={{
                    width: `${Math.max(0, Math.min(100, event.progress ?? 0))}%`,
                  }}
                />
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
            {event.tags &&
              event.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-zinc-50 text-zinc-500 text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-widest"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
