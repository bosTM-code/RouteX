import { useState } from "react";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About_Us";
import Success from "./pages/Success_Story";
import StoryDetails from "./pages/Story_Details";
import Contact from "./pages/Contact";
import VisaOffers from "./pages/Visa_Offers";
import Gallery from "./pages/Gallery";
import Coaching from "./pages/Coaching";
import CoachingDetails from "./pages/Coaching_Details";
import Visa from "./pages/Visa";
import VisaDetails from "./pages/Visa_Details";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/Country_Details";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/Blog_Details";
import Team from "./pages/Team";
import TeamDetails from "./pages/Team_Details";
import Faq from "./pages/FAQ";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Prices from "./pages/Pricing_Tables";
import ConsultationModal from "./components/ConsultationModal";

function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-1 pt-16 sm:pt-20 md:pt-24 lg:pt-[120.63px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/success-story" element={<Success />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/story-details" element={<StoryDetails />} />
          <Route path="/visa-offers" element={<VisaOffers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing-tables" element={<Prices />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/coaching/:id" element={<CoachingDetails />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/visa/:id" element={<VisaDetails />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:id" element={<CountryDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamDetails />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer />
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}

export default App;
