import DashboardPreview from "./Components/DashBoardPreview";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import { Button } from "./Components/UI/Button";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <Button
        variant="gradient"
        size="sm"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        Click Me
      </Button>

      <Button
        variant="black"
        size="md"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        Click Me1
      </Button>

      <Button
        variant="gradient"
        size="lg"
        onClick={() => {
          console.log("Button Clicked");
        }}
      >
        Click Me2
      </Button>
    </div>
  );
}

export default App;
