import Navbar from "@/componets/Navbar";
import HeroSection from "@/componets/HeroSection";
import CountSection from "@/componets/CountSection";
import ServiceSection from "@/componets/ServiceSection";
import EducationAndSkillSection from "@/componets/EducationAndSkillSection";
import ProjectSection from "@/componets/ProjectSection";
import Footer from "@/componets/Footer";

export default function Home() {
  return (
    <div className="bg-[#E5E7EB] px-6 py-6 ">
      {/* Hero section */}
      <HeroSection />

      {/* Count section */}
      <CountSection />

      {/* Service section */}
      <ServiceSection />

      {/* Education & Skills section */}
      <EducationAndSkillSection />

      {/* Project section */}
      <ProjectSection />

    </div>
  );
}
