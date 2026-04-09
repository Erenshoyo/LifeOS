"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CheckSquare,
  BookOpen,
  Zap,
  Target,
  Brain,
  Timer,
  Clock,
  Plus,
  Settings,
  HelpCircle,
} from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  const mainLinks = [
    { path: "/dashboard", icon: Home, label: "Today" },
    { path: "/tasks", icon: CheckSquare, label: "Tasks" },
    { path: "/journal", icon: BookOpen, label: "Journal" },
    { path: "/habits", icon: Zap, label: "Habits" },
    { path: "/goals", icon: Target, label: "Goals" },
    { path: "/brain-dump", icon: Brain, label: "Brain Dump" },
    { path: "/focus-mode", icon: Timer, label: "Focus Mode" },
    { path: "/timeline", icon: Clock, label: "Timeline" },
  ];

  return (
    <aside className="h-screen w-64 fixed left-0 top-0 bg-[var(--surface-container-low)] flex flex-col py-8 px-4 border-r border-[var(--border)]">
      {/* Logo */}
      <div className="mb-12 px-2">
        <h1 className="text-xl font-bold tracking-tight text-[var(--primary)]">
          Life OS
        </h1>
        <p className="text-[10px] text-[var(--on-surface-variant)] font-medium mt-1 uppercase tracking-widest">
          The Mindful Curator
        </p>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 space-y-1">
        {mainLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.path;

          return (
            <Link
              key={link.path}
              href={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "text-[var(--primary)] font-bold border-r-4 border-[var(--primary)] bg-[var(--surface-container)]/50"
                  : "text-[var(--on-surface-variant)] hover:text-[var(--primary)] hover:bg-[var(--surface-container)]/40"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{link.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* New Entry Button - Using gradient from primary to primary-container */}
      <button
        className="mb-8 w-full py-3 px-4 bg-gradient-to-br from-brand-dark to-brand-light dark:from-brand-light dark:to-brand-dark text-white rounded-xl flex items-center justify-center gap-2 font-semibold hover:opacity-90 transition-all active:scale-95 shadow-[0px_12px_32px_rgba(25,28,29,0.04)]"
        aria-label="Create a new entry"
      >
        <Plus className="w-5 h-5" />
        New Entry
      </button>

      {/* Footer Links */}
      <div className="pt-6 border-t border-[var(--border)] space-y-1">
        <Link
          href="/settings"
          className="flex items-center gap-3 px-4 py-2 text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors"
        >
          <Settings className="w-4 h-4" />
          <span className="text-sm">Settings</span>
        </Link>
        <button
          onClick={() => (window.location.href = "https://support.example.com")}
          className="flex items-center gap-3 px-4 py-2 text-[var(--on-surface-variant)] hover:text-[var(--primary)] transition-colors w-full text-left"
        >
          <HelpCircle className="w-4 h-4" />
          <span className="text-sm">Support</span>
        </button>
      </div>
    </aside>
  );
}
