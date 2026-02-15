import DashboardPreview from "./Components/DashBoardPreview";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import FeatureSection from "./Components/FeatureSection";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <FeatureSection /> 
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
