import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import lifeOSLogo from "../../../public/assets/Gemini_Generated_Image_cs798gcs798gcs79-removebg-preview-removebg-preview.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="p-5 max-w-7xl mx-auto m-5 ">
      <footer className="flex justify-between items-center py-3 px-6 rounded-2xl ">
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
              Privacy Policy
            </span>
            <span className="text-primary cursor-pointer hover:opacity-70 transition-opacity">
              Terms of Service
            </span>
          </div>

          <p className="">© 2026 Life OS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
