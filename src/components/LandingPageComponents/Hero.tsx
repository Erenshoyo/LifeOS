"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Antigravity from "../Antigravity";
import dashboardHeroImage from "../../../public/assets/Design Life OS Productivity App.webp";

export default function Hero() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* --- Top Text Section --- */}
      {/* Added 'isolate' to create a strict new stacking context for the children */}
      <section className="relative isolate flex flex-col items-center gap-6 py-16 md:py-24 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <div
            style={{
              width: "1080px",
              height: "1080px",
              position: "relative",
              opacity: 0.6,
            }}
          >
            <Antigravity
              count={300}
              magnetRadius={5}
              ringRadius={3}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1}
              lerpSpeed={0.1}
              color="#0c3a03"
              autoAnimate={false}
              particleVariance={3}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="sphere"
              fieldStrength={10}
            />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-5 pointer-events-none mt-20">
          <h3 className="uppercase font-bold text-xs tracking-[0.25em] text-emerald-900">
            your personal operating system
          </h3>

          <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold text-center text-slate-900 leading-[1.1]">
            Your mind, unified. <br className="hidden md:block" />
            Your goals, realized.
          </h1>

          <p className="max-w-2xl text-center text-slate-600 text-lg md:text-xl leading-relaxed">
            Stop bouncing between five different apps. Life OS integrates your
            tasks, habits, journals, and long-term goals into one calm,
            offline-first dashboard.
          </p>

          {/* pointer-events-auto turns the mouse back on ONLY for the buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 pointer-events-auto">
            <Button className="bg-[#002D1C] hover:bg-[#004d30] px-8 py-6 text-base font-bold transition-colors">
              Start your free system
            </Button>
            <Button
              variant="ghost"
              className="group flex items-center gap-2 font-semibold bg-white/80 backdrop-blur-sm"
            >
              See how it works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* --- Image Container --- */}
      <div className="max-w-7xl mx-auto relative mt-8 p-1 bg-linear-to-b from-white to-gray-100 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200/50">
        <section className="relative flex justify-center overflow-hidden rounded-[1.9rem]">
          <Image
            src={dashboardHeroImage}
            alt="Life OS productivity dashboard interface preview showing task management, goals, and journal features"
            priority
            quality={90}
            className="w-full h-auto object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
        </section>
      </div>
    </div>
  );
}
