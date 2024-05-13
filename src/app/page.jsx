import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import Service from "@/components/services/Service";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen    ">
      <HeroSection />
      <About />
      <Service/>
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
