import Footer from "@/components/Footer";
import ProfileSection from "@/components/sections/ProfileSection"
import SnsSection from "@/components/sections/SnsSection"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="mx-auto">
        <ProfileSection />
        <SnsSection />
      </div>
      <Footer />
    </div>
  );
}
