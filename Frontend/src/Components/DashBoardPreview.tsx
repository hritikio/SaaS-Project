import Herocard1 from "../assets/Herocard1.svg";
import Line15 from "../assets/Line15.svg";
import Line16 from "../assets/Line16.svg";
import Group108 from "../assets/Group 108.svg";
import Group109 from "../assets/Group 109.svg";
import Group110 from "../assets/Group 110.svg";
import Group111 from "../assets/Group 111.svg";
import Group112 from "../assets/Group112.svg";
import Group113 from "../assets/Group113.svg";
import Group115 from "../assets/Group115.svg";
import Group116 from "../assets/Group116.svg";
import Group117 from "../assets/Group117.svg";
import Group118 from "../assets/Group118.svg";
import Group119 from "../assets/Group119.svg";
import Group120 from "../assets/Group120.svg";
import Group121 from "../assets/Group121.svg";
import Group132 from "../assets/Group132.svg";

const DashBoardPreview = () => {
  return (
    <div className=" mt-[45px] bg-[#131415] w-[886px] h-[553px] flex items-center justify-around mx-auto rounded-[28px]">
      <div className="w-61.5 h-115 bg-[#222228] rounded-[20px] ">
        <div className="flex flex-col justify-center items-center">
          <img
            src={Herocard1}
            alt="herocard1"
            className="w-10 h-8 [20px] mt-5"
          />
          <img src={Line15} alt="line15" className="w-[184px] mt-5   " />
          <img src={Group116} alt="group116" className="w-[184px] mt-8 " />
          <img src={Group117} alt="group117" className="w-[184px] mt-6 " />
          <img src={Group118} alt="group118" className="w-[184px] mt-6 " />
          <img src={Group119} alt="group119" className="w-[184px] mt-6  " />
          <img src={Group120} alt="group120" className="w-[184px] mt-6  " />

          <img
            src={Group121}
            alt="group121"
            className="mt-[34px] w-[106px] h-[81px]"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-6.5">
        <div className="w-[231px] h-[217px] rounded-[20px] bg-[#222228]">
          <img
            src={Group115}
            alt="group115"
            className="w-[192px] h-[155px]   mx-auto mt-6"
          />
        </div>

        <div className="w-[231px] h-[217px] rounded-[20px] bg-[#222228]">
          <img
            src={Group113}
            alt="group113"
            className="w-[192px] h-[20px] mx-auto mt-6"
          />
          <img
            src={Line16}
            alt="line16"
            className="w-[192px]  mx-auto mt-4.5"
          />
          <img
            src={Group132}
            alt="group132"
            className="w-[171.75px] h-[94px] rounded-[10px] mx-auto mt-4.5"
          />
        </div>
      </div>

      <div className="flex  flex-col justify-center items-center">
        <div className="w-[230px] h-[328px] rounded-[20px] bg-[#222228] mb-2">
          <img
            src={Group112}
            alt="group112"
            className="w-[192px] h-[20px] mx-auto mt-6"
          />
          <img
            src={Group108}
            alt="group108"
            className="w-[192px] h-[54px] mx-auto mt-6   "
          />
          <img
            src={Group109}
            alt="group109"
            className="w-[192px] h-[54px] mx-auto mt-1"
          />
          <img
            src={Group110}
            alt="group110"
            className="w-[192px] h-[54px] mx-auto mt-1"
          />
          <img
            src={Group111}
            alt="group111"
            className="w-[192px] h-[54px] mx-auto mt-1"
          />
        </div>
        <div className="w-[230px] h-[103px] rounded-[20px] bg-[#222228] mt-5 "></div>
      </div>
    </div>
  );
};

export default DashBoardPreview;
