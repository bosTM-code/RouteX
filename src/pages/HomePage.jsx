import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DreamSection from "../components/DreamSection";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      {/* <DreamSection /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
