"use client";

import { Moon } from "lucide-react";
import lifeOSLogo from "../../../public/assets/Gemini_Generated_Image_cs798gcs798gcs79-removebg-preview-removebg-preview.png";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.5 }}
      className="p-5 max-w-7xl mx-auto m-5"
    >
      <footer className="flex flex-col md:flex-row justify-between items-center py-8 md:py-3 px-6 rounded-2xl gap-8 md:gap-4 text-center md:text-left">
        <div className="left-nav flex items-center gap-3">
          <motion.div
            whileHover={{ rotate: 10 }}
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

        <div className="right-nav flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <div className="flex gap-6 text-sm font-medium">
            <motion.a
              href="#"
              whileHover={{ opacity: 0.7 }}
              className="text-primary cursor-pointer transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 rounded-sm"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ opacity: 0.7 }}
              className="text-primary cursor-pointer transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-600 rounded-sm"
            >
              Terms of Service
            </motion.a>
          </div>

          <p className="text-sm text-zinc-500">
            © 2026 Life OS. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
