import HeroCommon from "../components/HeroCommon";
import CoachingDetailsSection from "../components/CoachingDetailsSection";

function CoachingDetailsPage() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2]">
      <HeroCommon title="Деталі коучингу" />
      <CoachingDetailsSection />
    </div>
  );
}

export default CoachingDetailsPage;
