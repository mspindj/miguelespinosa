import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CaseStudySection from "@/components/CaseStudySection";
import PhilosophyMarquee from "@/components/PhilosophyMarquee";
import ManifestoSection from "@/components/ManifestoSection";
import ExperienceSection from "@/components/ExperienceSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CaseStudySection />
        <PhilosophyMarquee />
        <ManifestoSection />
        <ExperienceSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
