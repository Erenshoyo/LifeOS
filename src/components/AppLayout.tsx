"use client";

import React from "react";
import { Sidebar } from "./Sidebar";

interface AppLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export function AppLayout({
  title,
  subtitle = "Harness the day",
  children,
}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-zinc-50">
      {/* The Navigation Sidebar */}
      <Sidebar />

      {/* The Main Content Area (Offset by 64 space units to account for the fixed sidebar) */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            <p className="text-sm font-medium text-zinc-500 mb-1">{subtitle}</p>
            <h1 className="text-3xl font-bold text-zinc-900 tracking-tight">
              {title}
            </h1>
          </header>

          {/* Dynamic Content */}
          {children}
        </div>
      </main>
    </div>
  );
}
