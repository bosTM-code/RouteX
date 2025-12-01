import HeroCommon from "../components/HeroCommon";
import VisaDetailsSection from "../components/VisaDetailsSection";

function VisaDetails() {
  return (
    <div className="bg-[#F4F8F2] min-h-screen overflow-x-hidden">
      <HeroCommon title="Деталі візи" />
      <VisaDetailsSection />
    </div>
  );
}

export default VisaDetails;
