import Hero from "@/components/LandingPageComponents/Hero";
import NavBar from "@/components/LandingPageComponents/NavBar";
import SectionExecute from "@/components/LandingPageComponents/SectionExecute";
import SectionConnect from "@/components/LandingPageComponents/SectionConnect";
import SectionLaunch from "@/components/LandingPageComponents/SectionLaunch";
import Footer from "@/components/LandingPageComponents/Footer";

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
      <div className="">
        <SectionConnect />
      </div>
      <div className="">
        <SectionLaunch />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
