import React from "react";
import { Button } from "@/components/ui/button";

const SectionLaunch = () => {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 md:py-40 flex flex-col items-center justify-center text-center px-6">
      {/* Base Background */}
      <div className="absolute inset-0 pointer-events-none bg-emerald-950" />

      {/* --- SUBTLE BLUR EFFECTS --- */}
      {/* Top Right Glow */}
      <div className="absolute -top-[20%] -right-[10%] w-[50vw] max-w-150 aspect-square rounded-full bg-white/10 blur-[120px] pointer-events-none z-0" />

      {/* Bottom Left Glow */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[50vw] max-w-150 aspect-square rounded-full bg-white/10 blur-[120px] pointer-events-none z-0" />
      {/* --------------------------- */}

      {/* Content Container (z-10 keeps it above the blurs) */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8">
        <span className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs">
          Get Started Today
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-1 max-w-3xl">
          Ready to harness the day?
        </h2>

        <p className="text-lg md:text-xl lg:text-2xl text-emerald-100/70 max-w-xl leading-relaxed">
          Join thousands of people who&apos;ve unified their productivity
          system.
        </p>

        <div className="mt-4 flex flex-col items-center gap-8">
          <Button
            size="lg"
            className="bg-white text-[#002D1C] hover:bg-emerald-50 text-base md:text-lg font-bold h-auto py-5 px-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all hover:scale-[1.03] active:scale-[0.98] border-none"
          >
            Launch Life OS Now
          </Button>

          <p className="text-sm text-emerald-100/40 font-medium">
            Free forever. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionLaunch;
