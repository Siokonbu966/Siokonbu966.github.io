import HeroSection from "@/components/portfolio/HeroSection"
import AboutSection from "@/components/portfolio/AboutSection"
import SkillsSection from "@/components/portfolio/SkillsSection"
import TimelineSection from "@/components/portfolio/TimelineSection"
import ContactSection from "@/components/portfolio/ContactSection"
import Footer from "@/components/Footer"

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
