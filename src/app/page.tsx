import Hero from "@/components/LandingPageComponents/Hero";
import NavBar from "@/components/LandingPageComponents/NavBar";
import SectionExecute from "@/components/LandingPageComponents/SectionExecute";

export default function LandingPage() {
  return (
    <div className="bg-slate-100">
      <NavBar />
      <div className="">
        <Hero />
      </div>
      <div className="">
        <SectionExecute />
      </div>
    </div>
  );
}
