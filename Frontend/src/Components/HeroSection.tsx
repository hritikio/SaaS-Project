const HeroSection = () => {
  return (
    <section className="flex flex-col items-center text-center mt-20 px-4">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Beautiful Landing Page <br /> Design for You
      </h1>

      <p className="mt-6 max-w-xl text-gray-400 border border-green-500 px-4 py-2">
        A good design is not only aesthetically pleasing, but also functional.
        It should be able to solve the problem
      </p>

      <button className="mt-8 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-3 text-sm font-semibold">
        Download Template
      </button>
    </section>
  );
};

export default HeroSection;
