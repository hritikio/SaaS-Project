import WorldBig from "../assets/WorldBig.svg"
import { Button } from "./UI/Button";
const Contact = () => {
  return (
    <div className="h-[640px] mt-[270px] flex justify-center items-center font-poppins gap-8">
      <div className="w-[542px] h-[542px] mr-10">
        <img
          src={WorldBig}
          alt="World"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col gap-4 self-start mt-8 mr-10">
        <h1 className="text-5xl font-semibold leading-[80px]">Get In Touch</h1>

        <p className="text-[#9E9E9E] text-[18px] leading-[28px] max-w-[420px]">
          A good design is not only aesthetically pleasing, but also functional.
          It should be able to solve the problem.
        </p>

        <input
          type="text"
          placeholder="Your Email"
          className="bg-[#18181C] px-[28px] py-[12px] mt-2 rounded-md"
        />

        <input
          type="text"
          placeholder="Name"
          className="bg-[#18181C] px-[28px] py-[12px] mt-2 rounded-md"
        />

        <input
          type="text"
          placeholder="Subject"
          className="bg-[#18181C] px-[28px] py-[12px] h-[156px] mt-2 rounded-md"
        />

        <Button variant="gradient" size="md">Get in Touch</Button>

      </div>
    </div>
  );
};

export default Contact;
