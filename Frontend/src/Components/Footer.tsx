import Group128 from "../assets/Group128.svg";

const Footer = () => {
  return (
    <footer className="w-full  bg-[#0E0F13] font-poppins ">
      {/* ===== TOP FOOTER ===== */}
      <div className="max-w-[1440px] mx-auto px-[160px] py-[80px] grid grid-cols-2 gap-x-[341px] ml-24 ">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6  ">
          <img src={Group128} alt="Logo" className="w-[56px] h-[45px] " />

          <p className="text-[#9E9E9E] text-[14px] leading-[24px] max-w-[280px]">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
        </div>

        {/* RIGHT SECTION (LINKS GRID) */}
        <div className="grid grid-cols-3 gap-[120px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 whitespace-nowrap  ">
            <h3 className="text-white font-semibold text-[16px] leading-[32px] ">
              Sections
            </h3>
            <span className="text-[#9E9E9E] text-[14px]">Home</span>
            <span className="text-[#9E9E9E] text-[14px]">Section One</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Two</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Three</span>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 pt-[32px] whitespace-nowrap mt-4">
            <span className="text-[#9E9E9E] text-[14px]">Home</span>
            <span className="text-[#9E9E9E] text-[14px]">Section One</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Two</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Three</span>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 pt-[32px] whitespace-nowrap mt-4">
            <span className="text-[#9E9E9E] text-[14px]">Home</span>
            <span className="text-[#9E9E9E] text-[14px]">Section One</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Two</span>
            <span className="text-[#9E9E9E] text-[14px]">Section Three</span>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border  bg-black  ">
        <div className="max-w-[1440px] mx-auto px-[160px] py-6 flex justify-between items-center">
          <p className="text-[#9E9E9E] text-[14px]">
            All Rights Reserved Inkyy.com 2022
          </p>

          {/* Social icons (placeholders) */}
          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-[#1C1D22] flex items-center justify-center text-white">
              T
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1C1D22] flex items-center justify-center text-white">
              in
            </div>
            <div className="w-10 h-10 rounded-full bg-[#1C1D22] flex items-center justify-center text-white">
              D
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
