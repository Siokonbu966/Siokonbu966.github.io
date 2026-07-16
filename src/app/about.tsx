import Footer from "@/components/Footer";
import ProfileSection from "@/components/sections/ProfileSection"
import SkillsSection from "@/components/sections/SkillsSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="mx-auto">
        <ProfileSection />
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
}
