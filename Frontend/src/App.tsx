import DashboardPreview from "./Components/DashBoardPreview";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import FeatureSection from "./Components/FeatureSection";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <FeatureSection /> 
      <Testimonial/>
      <Contact/>
    </div>
  );
}

export default App;
