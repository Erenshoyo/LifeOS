"use client";

import {
  Check,
  Circle,
  CircleCheck,
  Square,
  Target,
  Timer,
} from "lucide-react";
import React from "react";
import { motion, Variants } from "framer-motion";

const SectionExecute = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const tasks = [
    {
      id: 1,
      title: "Review client proposal",
      priority: "High",
      isCompleted: false,
      badgeStyles: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
    {
      id: 2,
      title: "Morning meditation",
      priority: null,
      isCompleted: true,
      badgeStyles: null,
    },
    {
      id: 3,
      title: "Update project documentation",
      priority: "Medium",
      isCompleted: false,
      badgeStyles: "bg-amber-50 border-amber-200 text-amber-800",
    },
  ];

  const heatmapData = [
    [1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0],
  ];

  return (
    <div className="bg-white mt-30 pb-30 overflow-hidden">
      {/* headings */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col justify-center items-center gap-5 p-30"
      >
        <h3 className="text-emerald-900 uppercase font-bold text-xs tracking-[0.25em]">
          Complete productivity suite
        </h3>
        <h1 className="text-4xl md:text-6xl lg:text-5xl tracking-tight font-bold text-center text-slate-900 leading-[1.1]">
          Everything you need. Nothing you don&apos;t.
        </h1>
        <p className="text-slate-800">Built for focus, designed for clarity.</p>
      </motion.div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto gap-4 px-4 sm:px-6 lg:px-8">
        {/* Top Row: Takes up 2 columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-2 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm font-sans w-full"
        >
          {/* Widget Header */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-emerald-950 p-3 rounded-xl shrink-0 shadow-sm border border-emerald-900">
              <CircleCheck className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col mt-0.5">
              <h3 className="font-bold text-xl text-slate-900 mb-1">
                Daily Execution
              </h3>
              <p className="text-slate-600 text-sm">
                See exactly what needs to happen today. No clutter, no
                overwhelm.
              </p>
            </div>
          </div>

          {/* Task List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full bg-slate-200/70 rounded-xl p-4 md:p-6 flex flex-col gap-3"
          >
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 5 }}
                className={`px-5 py-3.5 flex justify-between items-center bg-white rounded-xl shadow-sm border transition-shadow ${
                  task.isCompleted
                    ? "border-transparent opacity-75"
                    : "border-slate-100 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  {/* Checkbox Icon */}
                  {task.isCompleted ? (
                    <div className="flex items-center justify-center w-5 h-5 bg-emerald-950 rounded md shrink-0 cursor-pointer transition-colors">
                      <Check
                        className="w-3.5 h-3.5 text-white"
                        strokeWidth={3}
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer text-slate-400 hover:text-emerald-700 transition-colors">
                      <Square className="w-5 h-5" />
                    </div>
                  )}

                  {/* Task Title */}
                  <span
                    className={`text-sm md:text-base font-semibold select-none ${
                      task.isCompleted
                        ? "text-slate-400 line-through font-medium"
                        : "text-slate-900"
                    }`}
                  >
                    {task.title}
                  </span>
                </div>

                {/* Priority Badge */}
                {task.priority && (
                  <span
                    className={`font-bold px-2.5 py-1 border rounded-lg text-[11px] uppercase tracking-wider ${task.badgeStyles}`}
                  >
                    {task.priority}
                  </span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Top Row: Takes up 1 column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 bg-slate-100 p-4 rounded-xl w-full"
        >
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col w-full h-full min-h-94.5 font-sans">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-emerald-950 p-3 rounded-xl shrink-0 shadow-sm border border-emerald-900">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col mt-0.5">
                <h2 className="font-bold text-lg text-slate-900 leading-none mb-1.5">
                  Habit Heatmaps
                </h2>
                <p className="text-slate-600 text-sm leading-tight">
                  Build streaks that last.
                </p>
              </div>
            </div>

            {/* Heatmap Grid Section */}
            <div className="flex flex-col gap-2 w-full">
              {heatmapData.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1.5 w-full">
                  {row.map((isActive, colIndex) => (
                    <motion.div
                      key={colIndex}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: (rowIndex * 7 + colIndex) * 0.03,
                        type: "spring",
                        stiffness: 200,
                        damping: 10,
                      }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className={`h-8 flex-1 rounded cursor-pointer transition-colors duration-200 ${
                        isActive ? "bg-emerald-950" : "bg-slate-200"
                      }`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom Row: Focus Mode */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 bg-slate-100 p-4 rounded-xl w-full"
        >
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col w-full h-full font-sans">
            {/* Header Section */}
            <div className="flex items-start gap-4 mb-8">
              <div className="bg-emerald-950 p-3 rounded-xl shrink-0 shadow-sm border border-emerald-900">
                <Timer className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col mt-0.5">
                <h2 className="font-bold text-lg text-slate-900 leading-none mb-1.5">
                  Focus Mode
                </h2>
                <p className="text-slate-600 text-sm leading-tight">
                  Distraction-free Pomodoro timer.
                </p>
              </div>
            </div>

            {/* Timer Display Section */}
            <div className="flex-1 flex items-center justify-center pb-4">
              <div className="relative flex items-center justify-center w-44 h-44">
                {/* Background Track Circle */}
                <Circle
                  className="w-full h-full text-slate-100 absolute inset-0"
                  strokeWidth={1.5}
                />

                {/* Active Progress Ring Circle */}
                <motion.div
                  initial={{ rotate: -90 }}
                  className="absolute inset-0"
                >
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      className="text-emerald-600"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 0.7 }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                  </svg>
                </motion.div>

                {/* Timer Text */}
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-4xl font-bold text-slate-900 tracking-tight"
                >
                  25:00
                </motion.span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Row: Brain Dump (Takes up 2 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="col-span-1 lg:col-span-2 bg-slate-100 p-4 rounded-xl w-full"
        >
          <div className="bg-slate-50 p-6 rounded-xl font-sans w-full h-full">
            {/* Header Section */}
            <div className="flex items-center gap-4 mb-7">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
                className="bg-emerald-950 p-3 rounded-full shrink-0 shadow-sm"
              >
                <CircleCheck className="w-5 h-5 text-white" />
              </motion.div>
              <div>
                <h1 className="font-bold text-lg text-slate-900">
                  The Brain Dump
                </h1>
                <p className="text-slate-600 text-sm mt-0.5">
                  Capture thoughts instantly. Life OS intelligently converts
                  them into tasks.
                </p>
              </div>
            </div>

            {/* Interactive/Processing Area */}
            <div className="w-full bg-slate-200 rounded-lg px-6 py-5 flex flex-col gap-4">
              {/* Step 1: Raw Input / Thought */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="px-5 py-4 bg-white/60 rounded-xl border border-slate-300 border-dashed"
              >
                <p className="text-slate-700 italic text-sm">
                  &quot;Remember to email Sarah about the design mockups by
                  Friday&quot;
                </p>
              </motion.div>

              {/* Step 2: Processing Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-2 px-2 text-sm text-slate-500 font-medium"
              >
                <Check
                  className="w-4 h-4 text-emerald-600 opacity-70 animate-pulse"
                  strokeWidth={3}
                />
                <span className="animate-pulse">Converting to task...</span>
              </motion.div>

              {/* Step 3: Converted Task */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.8, type: "spring" }}
                className="px-6 py-4 flex justify-between items-center bg-white rounded-xl shadow-sm border border-emerald-100 transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 cursor-pointer text-slate-400 hover:text-emerald-700 transition-colors">
                    <Square className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Email Sarah about design mockups
                    </h3>
                    <div className="flex gap-2 mt-1.5">
                      <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        Due: Friday
                      </span>
                    </div>
                  </div>
                </div>
                <p className="font-bold px-2.5 py-1.5 bg-green-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                  High
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionExecute;


