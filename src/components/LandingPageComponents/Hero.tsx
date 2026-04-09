import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import dashboardHeroImage from "../../../public/assets/Design Life OS Productivity App.webp";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="text-CTA flex flex-col items-center gap-5">
        <h3 className="uppercase font-bold text-[12px] tracking-[4px]">
          your personal operating system
        </h3>
        <h1 className="text-5xl tracking-wider font-bold text-center">
          Your mind, unified. <br />
          Your goals, realized.
        </h1>
        <p className="text-center text-slate-600 text-lg">
          Stop bouncing between five different apps. Life OS integrates your{" "}
          <br />
          tasks, habits, journals, and long-term goals into one calm,
          offline-first <br /> dashboard.
        </p>
        <div className="mt-3">
          <Button className="bg-[#002D1C] px-7 py-5 font-bold">
            Start your free system
          </Button>
          <Button className="bg-white text-black">
            See how it works <ArrowRight />
          </Button>
        </div>
      </section>

      <div className="mt-5 p-1 bg-linear-to-b from-white to-gray-100 rounded-3xl [box-shadow:0_20px_25px_-5px_rgba(0,0,0,0.1)]">
        <section className="image flex justify-center">
          <Image
            priority
            sizes="(max-width: 1400px) 100vw, 1400px"
            className="rounded-3xl w-full"
            src={dashboardHeroImage}
            alt="Life OS productivity dashboard interface preview showing task management, goals, and journal features"
          />
        </section>
      </div>
    </div>
  );
}
