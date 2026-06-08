import { Clock, MoreHorizontal, Mic, Image as ImageIcon } from "lucide-react";

export interface JournalEntry {
  id: string;
  title: string;
  emoji: string;
  dateStr: string;
  content: React.ReactNode;
  attachment?: {
    type: "audio" | "image";
    label: string;
  };
}

interface JournalEntryCardProps {
  entry: JournalEntry;
  onMenuClick?: (id: string, e: React.MouseEvent) => void;
}

export function JournalEntryCard({ entry, onMenuClick }: JournalEntryCardProps) {
  const handleMenuClick = (e: React.MouseEvent) => {
    if (onMenuClick) {
      onMenuClick(entry.id, e);
    }
  };

  const renderAttachmentIcon = () => {
    if (!entry.attachment) return null;
    switch (entry.attachment.type) {
      case "audio":
        return <Mic className="w-3.5 h-3.5" />;
      case "image":
        return <ImageIcon className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0px_1px_3px_rgba(0,0,0,0.05)] border border-zinc-100 flex flex-col overflow-hidden">
      <div className="p-6 flex flex-col gap-4">
        {/* Card Header */}
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-zinc-900 font-manrope">
                {entry.title}
              </h3>
              <span className="text-xl">{entry.emoji}</span>
            </div>
            <div className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {entry.dateStr}
            </div>
          </div>
          <button
            onClick={handleMenuClick}
            className="text-zinc-300 hover:text-zinc-500 focus:outline-hidden"
            aria-label="More options"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Content Paragraph */}
        <div className="text-zinc-600 leading-relaxed text-sm md:text-base">
          {entry.content}
        </div>
      </div>

      {/* Attachment Footer */}
      {entry.attachment && (
        <div className="px-6 py-4 bg-zinc-50/50 border-t border-zinc-50 flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-xl border border-zinc-100 text-[11px] font-bold text-zinc-500 shadow-sm">
            {renderAttachmentIcon()}
            {entry.attachment.label}
          </div>
        </div>
      )}
    </div>
  );
}
