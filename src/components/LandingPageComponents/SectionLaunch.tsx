"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const SectionLaunch = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 md:py-40 flex flex-col items-center justify-center text-center px-6">
      {/* Base Background */}
      <div className="absolute inset-0 pointer-events-none bg-emerald-950" />

      {/* --- SUBTLE BLUR EFFECTS --- */}
      {/* Top Right Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[20%] -right-[10%] w-[50vw] max-w-150 aspect-square rounded-full bg-white blur-[120px] pointer-events-none z-0"
      />

      {/* Bottom Left Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -bottom-[20%] -left-[10%] w-[50vw] max-w-150 aspect-square rounded-full bg-white blur-[120px] pointer-events-none z-0"
      />
      {/* --------------------------- */}

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6 md:gap-8"
      >
        <motion.span
          variants={itemVariants}
          className="text-emerald-400 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs"
        >
          Get Started Today
        </motion.span>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter leading-1 max-w-3xl"
        >
          Ready to harness the day?
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl lg:text-2xl text-emerald-100/70 max-w-xl leading-relaxed"
        >
          Join thousands of people who&apos;ve unified their productivity
          system.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-4 flex flex-col items-center gap-8"
        >
          <Link href="/dashboard" className="w-full md:w-auto">
            <Button
              asChild
              size="lg"
              className="w-full md:w-auto bg-white text-[#002D1C] hover:bg-emerald-50 text-base md:text-lg font-bold h-auto py-5 px-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all border-none cursor-pointer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Launch Life OS Now
              </motion.button>
            </Button>
          </Link>

          <p className="text-sm text-emerald-100/40 font-medium">
            Free forever. No credit card required.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SectionLaunch;
