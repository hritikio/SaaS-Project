import Group128 from "../assets/Group128.svg";
import Twitter from "../assets/Twitter.svg";
import LinkedIn from "../assets/LinkedIn.svg";
import Discord from "../assets/Discord.svg";
const Footer = () => {
  return (
    <footer className="w-full  bg-[#0E0F13] font-poppins ">
      <div className=" max-w-[1440px] mx-auto px-[160px] py-[80px] grid grid-cols-[268px_1fr] gap-x-[341px] ml-24 ">
        <div className="flex flex-col gap-6  ">
          <img src={Group128} alt="Logo" className="w-[56px] h-[45px] " />

          <p className="text-[#9E9E9E] text-[14px] leading-[24px] max-w-[280px]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
        </div>

        <div className="grid grid-cols-3 gap-[120px]">
          <div className="flex flex-col gap-4 whitespace-nowrap  ">
            <h3 className="text-white font-semibold text-[16px] leading-[32px] ">
              Sections
            </h3>
            <span className="text-[#9E9E9E] text-[14px]">Home</span>
            <span className="text-[#9E9E9E] text-[14px]">Section One</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Two</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Three</span>
          </div>

          <div className="flex flex-col gap-4 pt-[32px] whitespace-nowrap mt-4">
            <span className="text-[#9E9E9E] text-[14px]">Home</span>
            <span className="text-[#9E9E9E] text-[14px]">Section One</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Two</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Three</span>
          </div>

          <div className="flex flex-col gap-4 pt-[32px] whitespace-nowrap mt-4">
            <span className="text-[#9E9E9E] text-[14px]">Home</span>
            <span className="text-[#9E9E9E] text-[14px]">Section One</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Two</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Three</span>
          </div>
        </div>
      </div>

      <div className=" bg-black  -mt-[60px] ">
        <div className="max-w-[1440px] mx-auto px-[160px] py-6 flex justify-between items-center">
          <p className="text-[#9E9E9E] text-[14px] ml-10 ">
            All Rights Reserved Inkyy.com 2022
          </p>

          <div className="flex gap-4 cursor-pointer">
            <div className="w-10 h-10 rounded-[16px] bg-[#18181C] flex items-center justify-center text-white">
              <img src={Twitter} alt="Twitter" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1C1D22] flex items-center justify-center text-white">
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1C1D22] flex items-center justify-center text-white">
              <img src={Discord} alt="Discord" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
