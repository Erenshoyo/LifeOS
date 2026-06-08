"use client";

import { useState } from "react";
import { CloudRain, Trees, Coffee, Settings, X } from "lucide-react";

interface SoundData {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  isActive: boolean;
  volume?: number;
  iconBgClass: string;
  iconTextClass: string;
}

const INITIAL_SOUNDS: SoundData[] = [
  {
    id: "rain",
    name: "Midnight Rain",
    icon: CloudRain,
    isActive: true,
    volume: 65,
    iconBgClass: "bg-[#afeeee]",
    iconTextClass: "text-zinc-700",
  },
  {
    id: "forest",
    name: "Green Forest",
    icon: Trees,
    isActive: false,
    iconBgClass: "bg-[#f4f4f4]",
    iconTextClass: "text-zinc-500",
  },
  {
    id: "cafe",
    name: "Quiet Cafe",
    icon: Coffee,
    isActive: false,
    iconBgClass: "bg-[#f4f4f4]",
    iconTextClass: "text-zinc-500",
  },
];

export function AmbientSoundCard() {
  const [isMixAudioOpen, setIsMixAudioOpen] = useState(false);
  const [sounds, setSounds] = useState<SoundData[]>(INITIAL_SOUNDS);

  // Ready for backend integration:
  // e.g. toggling active sound or updating volumes
  const handleToggleSound = (id: string) => {
    setSounds((prev) =>
      prev.map((sound) =>
        sound.id === id ? { ...sound, isActive: !sound.isActive } : sound
      )
    );
  };

  const handleVolumeChange = (id: string, newVolume: number) => {
    setSounds((prev) =>
      prev.map((sound) =>
        sound.id === id ? { ...sound, volume: newVolume } : sound
      )
    );
  };

  return (
    <div className="w-full md:w-[373.3px] shadow-[0px_12px_32px_rgba(25,28,29,0.04)] rounded-2xl bg-[#f4f4f4] p-6 flex flex-col gap-6 relative">
      <div className="flex items-center justify-between text-[18px] font-manrope">
        <b className="leading-[27px] text-zinc-800">Ambient Sound</b>
        <Settings className="h-5 w-5 text-zinc-400" />
      </div>

      <div className="flex-1 flex flex-col gap-4">
        {sounds.map((sound) => {
          const IconComponent = sound.icon;

          if (sound.isActive) {
            return (
              <div
                key={sound.id}
                onClick={() => handleToggleSound(sound.id)}
                className="rounded-xl bg-white flex items-center py-0 px-4 h-[72px] gap-4 shadow-sm border border-zinc-100 transition-all hover:border-emerald-200 group cursor-pointer"
              >
                <div className={`h-10 w-10 rounded-[10px] ${sound.iconBgClass} flex items-center justify-center`}>
                  <IconComponent className={`h-5 w-5 ${sound.iconTextClass}`} />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="leading-5 font-semibold text-zinc-800">
                    {sound.name}
                  </div>
                  {sound.volume !== undefined && (
                    <div className="h-1 rounded-full bg-[#e2e8f0] overflow-hidden">
                      <div
                        className="h-full bg-zinc-800"
                        style={{ width: `${sound.volume}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          }

          return (
            <div
              key={sound.id}
              onClick={() => handleToggleSound(sound.id)}
              className="rounded-xl bg-[#e5e7eb] flex items-center py-0 px-4 h-[72px] gap-4 transition-all hover:bg-zinc-200 cursor-pointer"
            >
              <div className={`h-10 w-10 rounded-[10px] ${sound.iconBgClass} flex items-center justify-center`}>
                <IconComponent className={`h-5 w-5 ${sound.iconTextClass}`} />
              </div>
              <div className="leading-5 font-semibold text-zinc-600">
                {sound.name}
              </div>
            </div>
          );
        })}
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
            {sounds.map((sound) => (
              <div key={sound.id} className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-zinc-400">
                  <span>{sound.name.replace("Midnight ", "").replace("Green ", "").replace("Quiet ", "")} Content</span>
                  <span>70%</span>
                </div>
                <input
                  type="range"
                  className="w-full accent-[#002d1c]"
                  defaultValue={70}
                  onChange={(e) => handleVolumeChange(sound.id, parseInt(e.target.value))}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
