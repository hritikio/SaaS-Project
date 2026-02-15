import Solar from "../assets/solar.svg";
import group124 from "../assets/group124.svg";
import { Button } from "./UI/Button";
import Ellipse11 from "../assets/Ellipse11.svg";
import Ellipse9 from "../assets/Ellipse9.svg";
import Ellipse10 from "../assets/Ellipse10.svg";
import Planet from "../assets/Planet.svg";
const SolarSystemCard = () => {
  return (
    <div className="flex size-175 w-[1300px]  justify-between items-center mt-5 mx-auto  ">
      <div className=" relative w-[55%] ">
        <img src={Solar} alt="solar system" />
        <img src={Ellipse11} alt="ellipse" className=" absolute top-50 left-38 " />
        <img src={group124} alt="group124" className=" absolute top-36 left-96 " />
        <img src={Ellipse9} alt="ellipse9" className=" absolute top-55 left-120 " />
        <img src={Planet} alt="planet" className=" absolute top-77 left-77 " />
        <img src={group124} alt="group124" className=" absolute top-94.5 left-35 " />
        <img src={group124} alt="group124" className=" absolute top-118.25 left-109.5 " />
        <img src={Ellipse10} alt="ellipse10" className=" absolute top-122 left-60 " />
      </div>
      <div className="mr-auto  w-[45%]">
        <div className="  flex flex-col w-full  gap-8 justify-center items-start">
          <h1 className="font-semibold text-5xl leading-16  ">
            We're here to <br />
            guide and help
            <br /> you at all times
          </h1>
          <p className="text-[#9E9E9E] text-[18px] leading-7">
            A good design is not only aesthetically
            <br /> pleasing, but also functional. It should be <br />
            able to solve the problem{" "}
          </p>

          <Button variant="gradient" size="sm"  >Download</Button>
        </div>
      </div>
    </div>
  );
}

export default SolarSystemCard