import { Button } from "./UI/Button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-16 max-w-[760px] mx-auto">
      <h1 className="text-[64px] font-semibold leading-[76px] tracking-normal">
        Beautiful Landing Page <br /> Design for You
      </h1>

      <p className="mt-4 max-w-[560px] text-[16px] font-normal leading-7 text-[#9E9E9E]">
        A good design is not only aesthetically pleasing, but also <br />{" "}
        functional. It should be able to solve the problem
      </p>

      <div className="mt-8">
        <Button
          variant="gradient"
          size="lg"
          onClick={() => console.log("2nd button clicked ")}
        >
          Download Template
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
