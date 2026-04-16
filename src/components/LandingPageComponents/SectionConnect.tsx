"use client";

import React from "react";
import { CheckSquare, Target, Check } from "lucide-react";
import { motion, Variants } from "framer-motion";

const SectionConnect = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="bg-slate-50 py-24 font-sans border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 sm:px-8 lg:px-12 items-center">
        {/* Left Column: Copy & Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-6 lg:pr-10"
        >
          <div>
            <h3 className="text-emerald-600 uppercase font-bold text-xs tracking-widest mb-4">
              The Methodology
            </h3>
            <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
              Connect today&apos;s tasks to tomorrow&apos;s goals.
            </h2>
            <div className="text-slate-600 text-lg space-y-6">
              <p>
                Every task you complete feeds into your larger ambitions. Life
                OS shows you the direct line from daily execution to
                life-changing outcomes.
              </p>
              <p>
                No more wondering &quot;Am I working on the right things?&quot; Everything
                is intentional. Everything connects.
              </p>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-4 flex flex-col gap-6"
          >
            {/* Features */}
            {[
              {
                title: "Goal-Aligned Tasks",
                desc: "Every task links to a larger goal, keeping you on track.",
              },
              {
                title: "Progress Visualization",
                desc: "See how daily actions compound into major achievements.",
              },
              {
                title: "Weekly Reviews",
                desc: "Reflect on your progress and refine your approach.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4"
              >
                <div className="bg-emerald-950 rounded-full mt-1 p-0.5 shrink-0 text-white shadow-sm">
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-slate-900 leading-none mb-1.5">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Progress Widget */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex items-center justify-center font-sans"
        >
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] w-full relative border border-slate-100">
            <div className="flex flex-col">
              {/* Top Card */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="bg-slate-100/80 rounded-2xl p-5 lg:p-6 flex flex-col gap-2.5 w-full"
              >
                <div className="flex items-center gap-3">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="bg-emerald-950 rounded md p-1 shadow-sm shrink-0"
                  >
                    <CheckSquare className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="font-semibold text-[15px] text-slate-900">
                    Complete module 3 of online course
                  </span>
                </div>
                <p className="text-[13px] text-slate-500 ml-9">
                  Completed today
                </p>
              </motion.div>

              {/* Dotted Center Line Visual */}
              <div className="flex justify-center py-4">
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 56, opacity: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="w-0 border-l-[3px] border-dotted border-slate-400"
                />
              </div>

              {/* Bottom Card */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="bg-slate-100/80 rounded-2xl p-5 lg:p-6 flex flex-col gap-6 w-full shadow-sm relative z-10"
              >
                <div className="flex items-center gap-2.5">
                  <Target
                    className="w-5 h-5 text-emerald-950 shrink-0"
                    strokeWidth={2.5}
                  />
                  <h3 className="font-bold text-slate-900 text-base">
                    Complete Online Course
                  </h3>
                </div>

                {/* Progress Bar Section */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex justify-between items-end text-[13px]">
                    <span className="text-slate-600 font-medium">Progress</span>
                    <span className="text-slate-900 font-bold">68%</span>
                  </div>

                  {/* The Progress Track */}
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden border border-slate-300/30">
                    {/* The Progress Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "68%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
                      className="h-full rounded-full bg-emerald-950"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    8 of 12 modules completed
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionConnect;
