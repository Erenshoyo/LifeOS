"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Menu, X } from "lucide-react";
import lifeOSLogo from "../../../public/assets/Gemini_Generated_Image_cs798gcs798gcs79-removebg-preview-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 inset-x-0 z-50 max-w-7xl mx-auto px-6">
      <nav className="flex justify-between items-center py-3 px-6 rounded-2xl border border-white/20 bg-white/30 backdrop-blur-md shadow-lg">
        <div className="left-nav flex items-center gap-3">
          <div className="logo w-10">
            <Image src={lifeOSLogo} alt="Life OS logo" />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-extrabold tracking-tight leading-tight text-[#002D1C]">
              Life OS
            </h1>
            <p className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
              The Mindful Curator
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="right-nav hidden lg:flex items-center gap-8">
          <div className="flex gap-6 text-sm font-medium">
            <span className="text-primary cursor-pointer hover:opacity-70 transition-opacity">
              Features
            </span>
            <span className="text-primary cursor-pointer hover:opacity-70 transition-opacity">
              Methodology
            </span>
          </div>

          <div className="theme-change-logo cursor-pointer bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
            <Moon className="w-5 h-5 text-primary" />
          </div>
          <Link href="/dashboard">
            <Button className="rounded-full px-6 py-4.5 bg-[#002D1C] hover:bg-[#004d30]">
              Launch Workspace
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center gap-4">
          <div className="theme-change-logo cursor-pointer bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors">
            <Moon className="w-5 h-5 text-primary" />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-[#002D1C] hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-[88px] z-40 bg-white/80 backdrop-blur-xl transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 p-12 h-screen">
          <nav className="flex flex-col items-center gap-6 text-xl font-bold text-[#002D1C]">
            <span
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-emerald-700 transition-colors"
            >
              Features
            </span>
            <span
              onClick={() => setIsMenuOpen(false)}
              className="cursor-pointer hover:text-emerald-700 transition-colors"
            >
              Methodology
            </span>
          </nav>
          <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="w-full max-w-xs">
            <Button className="w-full rounded-2xl py-6 text-lg bg-[#002D1C] hover:bg-[#004d30] shadow-xl">
              Launch Workspace
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
