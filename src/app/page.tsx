import Hero from "@/components/LandingPageComponents/Hero";
import NavBar from "@/components/LandingPageComponents/NavBar";

export default function LandingPage() {
  return <div>
    <NavBar />
    <div className="mt-40">
      <Hero/>
    </div>
  </div>;
}
