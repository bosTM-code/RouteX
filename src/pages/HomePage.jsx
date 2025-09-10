import Navbar from "../components/Navbar";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import DreamSection from "../components/DreamSection";
import Sponsers from "../components/Sponsers";

function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <DreamSection />
      <Sponsers />
      <Footer />
    </div>
  );
}

export default HomePage;
