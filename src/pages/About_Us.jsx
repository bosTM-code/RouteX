import HeroCommon from "../components/HeroCommon";
import DreamSection from "../components/DreamSection";
import ProcessSection from "../components/ProcessSection";
import OfferStatsSection from "../components/OfferStatsSection";
import Sponsers from "../components/Sponsers";
import AboutContactSection from "../components/AboutContactSection";
import AboutCountriesCategory from "../components/AboutCountriesCategory";

function About() {
  return (
    <div className="overflow-x-hidden bg-[#F4F8F2]">
      <HeroCommon title="Про нас" />
      <DreamSection />
      <ProcessSection />
      <OfferStatsSection />
      <Sponsers />
      <AboutContactSection />
      <AboutCountriesCategory />
    </div>
  );
}

export default About;
