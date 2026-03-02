import Footer from "@/components/Footer";
import HistorySection from "@/components/sections/HistorySection";
import ProfileSection from "@/components/sections/ProfileSection"
import SkillsSection from "@/components/sections/SkillsSection"

export default function AboutPage() {
  return (
    <>
      <div className="bg-blue-900 text-white min-h-screen">
        <div className="mx-auto max-w-5xl sm:px-6 lg:px-8">
          <ProfileSection />
          <SkillsSection />
          <HistorySection />
        </div>
        <Footer />
      </div>
    </>
  );
}
