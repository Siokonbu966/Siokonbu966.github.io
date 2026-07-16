import Footer from "@/components/Footer";
import ProfileSection from "@/components/sections/ProfileSection"
import SkillsSection from "@/components/sections/SkillsSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto">
        <ProfileSection />
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
}
