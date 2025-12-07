import Footer from "@/components/Footer";
import HistorySection from "@/components/sections/HistorySection";
import ProfileSection from "@/components/sections/ProfileSection"
import SkillsSection from "@/components/sections/SkillsSection"
import WorksSection from "@/components/sections/WorksSection";

export default function AboutPage() {
  return (
    <>
      <body>
        <div className="bg-primary mx-auto w-full max-w-[60rem]">
          <ProfileSection />
          <SkillsSection />
          {/* <WorksSection /> */}
          <HistorySection />
        </div>
      </body>
      <Footer />
    </>
  );
}
