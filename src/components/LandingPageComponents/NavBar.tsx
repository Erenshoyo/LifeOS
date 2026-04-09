import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import lifeOSLogo from "../../../public/assets/Gemini_Generated_Image_cs798gcs798gcs79-removebg-preview-removebg-preview.png";
import Image from "next/image";

export default function NavBar() {
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

        <div className="right-nav flex items-center gap-8">
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
          <Button className="rounded-full px-6 py-4.5 bg-[#002D1C] hover:bg-[#004d30]">
            Launch Workspace
          </Button>
        </div>
      </nav>
    </div>
  );
}