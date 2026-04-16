"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Menu, X } from "lucide-react";
import lifeOSLogo from "../../../public/assets/Gemini_Generated_Image_cs798gcs798gcs79-removebg-preview-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    const opts = { passive: true };
    window.addEventListener("scroll", handleScroll, opts);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 z-50 max-w-7xl mx-auto px-6 transition-all duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <nav className="flex justify-between items-center py-3 px-6 rounded-2xl border border-white/20 bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] border-solid">
        <div className="left-nav flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="logo w-10"
          >
            <Image src={lifeOSLogo} alt="Life OS logo" />
          </motion.div>
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
            <motion.span
              whileHover={{ opacity: 0.7 }}
              className="text-primary cursor-pointer transition-opacity"
            >
              Features
            </motion.span>
            <motion.span
              whileHover={{ opacity: 0.7 }}
              className="text-primary cursor-pointer transition-opacity"
            >
              Methodology
            </motion.span>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="theme-change-logo cursor-pointer bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors"
          >
            <Moon className="w-5 h-5 text-primary" />
          </motion.div>
          <Link href="/dashboard">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="rounded-full px-6 py-4.5 bg-[#002D1C] hover:bg-[#004d30] shadow-sm">
                Launch Workspace
              </Button>
            </motion.div>
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-0 top-[88px] z-40 bg-white/90 backdrop-blur-2xl"
          >
            <div className="flex flex-col items-center gap-8 p-12 h-screen">
              <nav className="flex flex-col items-center gap-6 text-xl font-bold text-[#002D1C]">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer hover:text-emerald-700 transition-colors"
                >
                  Features
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer hover:text-emerald-700 transition-colors"
                >
                  Methodology
                </motion.span>
              </nav>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-full max-w-xs"
              >
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full rounded-2xl py-6 text-lg bg-[#002D1C] hover:bg-[#004d30] shadow-xl">
                    Launch Workspace
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
