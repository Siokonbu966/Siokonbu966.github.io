import Footer from "@/components/Footer";
import HistorySection from "@/components/sections/HistorySection";
import ProfileSection from "@/components/sections/ProfileSection"
import SkillsSection from "@/components/sections/SkillsSection"
import WorksSection from "@/components/sections/WorksSection";

export default function AboutPage() {
  return (
    <>
      <div className="bg-blue-900">
        <ProfileSection />
        <SkillsSection />
        <WorksSection />
        <HistorySection />
        <Footer />
      </div>
    </>
  );
}
