import DashboardPreview from "./Components/DashBoardPreview";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import FeatureSection from "./Components/FeatureSection";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <FeatureSection /> 
    </div>
  );
}

export default App;
