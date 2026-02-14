import { Button } from "./UI/Button";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-4 border font-poppins max-w-[749px]  mx-auto ">
      <h1 className="text-[64px] font-semibold leading-20 tracking-normal ">
        Beautiful Landing Page <br /> Design for You
      </h1>

      <p className="mt-3 text-[18px] font-normal tracking-normal leading-7 h-20 text-gray-400   ">
        A good design is not only aesthetically pleasing, but also <br />{" "}
        functional. It should be able to solve the problem
      </p>

      <Button
        variant="gradient"
        size="lg"
        onClick={() => console.log("2nd button clicked ")}
      >
        Download Template
      </Button>
    </section>
  );
};

export default HeroSection;
