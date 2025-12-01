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
import Error from "./pages/Error";
import Footer from "./components/Footer";
import Prices from "./pages/Pricing_Tables";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

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
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
