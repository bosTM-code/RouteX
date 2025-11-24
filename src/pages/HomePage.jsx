import FeatureSection from "../components/FeatureSection";
import Hero from "../components/Hero";
import DreamSection from "../components/DreamSection";
import Sponsers from "../components/Sponsers";
import CountriesSection from "../components/CountriesSection";
import VisaSection from "../components/VisaSection";
import AvailibleCountriesSection from "../components/AvailibleCountriesSection";
import SuccessStoriesSection from "../components/SuccessStoriesSection";
import BlogPreviewSection from "../components/BlogPreviewSection";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <FeatureSection />
      <DreamSection />
      <Sponsers />
      <CountriesSection />
      <VisaSection />
      <AvailibleCountriesSection />
      <SuccessStoriesSection />
      <BlogPreviewSection />
    </div>
  );
}

export default HomePage;
