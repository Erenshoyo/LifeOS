"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Antigravity from "../Antigravity";
import dashboardHeroImage from "../../../public/assets/Design Life OS Productivity App.webp";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* --- Top Text Section --- */}
      <section className="relative isolate flex flex-col items-center gap-6 py-16 md:py-24 overflow-hidden rounded-3xl">
        <div className="absolute inset-0 flex justify-center items-center z-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 2 }}
            style={{
              width: "1080px",
              height: "1080px",
              position: "relative",
            }}
          >
            <Antigravity
              count={300}
              magnetRadius={5}
              ringRadius={3}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1}
              smoothSpeed={0.1}
              color="#0c3a03"
              autoAnimate={false}
              particleVariance={3}
              rotationSpeed={0}
              depthFactor={1}
              pulseSpeed={3}
              particleShape="sphere"
              fieldStrength={10}
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center gap-5 pointer-events-none mt-20"
        >
          <motion.h3
            variants={itemVariants}
            className="uppercase font-bold text-xs tracking-[0.25em] text-emerald-900"
          >
            your personal operating system
          </motion.h3>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl tracking-tight font-bold text-center text-slate-900 leading-[1.1]"
          >
            Your mind, unified. <br className="hidden md:block" />
            Your goals, realized.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl text-center text-slate-600 text-lg md:text-xl leading-relaxed"
          >
            Stop bouncing between five different apps. Life OS integrates your
            tasks, habits, journals, and long-term goals into one calm,
            offline-first dashboard.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4 pointer-events-auto"
          >
            <Link href="/dashboard">
              <Button className="bg-[#002D1C] hover:bg-[#004d30] px-8 py-6 text-base font-bold transition-colors">
                Start your free system
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="group flex items-center gap-2 font-semibold bg-white/80 backdrop-blur-sm shadow-sm"
            >
              See how it works
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- Image Container --- */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="max-w-7xl mx-auto relative mt-8 p-1 bg-linear-to-b from-white to-gray-100 rounded-[2rem] shadow-2xl overflow-hidden border border-gray-200/50"
      >
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
      </motion.div>
    </div>
  );
}
