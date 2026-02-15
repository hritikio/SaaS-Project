import Card from "./UI/Card";
import group102 from "../assets/group102.svg";
import group103 from "../assets/group103.svg";
import group105 from "../assets/group105.svg";
import group106 from "../assets/group106.svg";
import group from "../assets/Group.svg";
import group129 from "../assets/Group129.svg";

const FeatureSection = () => {
  return (
    <div className=" mt-[175px] text-white max-w-[1200px] flex flex-col justify-center align-center border mx-auto font-poppins">
      <h1 className="text-5xl font-semibold  leading-20 ">Feature Boxes</h1>
      <p className="text-[#9E9E9E] mb-8">
        {" "}
        A good design is not only aesthetically pleasing, but also <br />
        functional. It should be able to solve the problem{" "}
      </p>
      <div className="grid grid-cols-3 gap-y-7.5 ">
        <Card
          icon={group102}
        />
        <Card
          icon={group}
        />
        <Card
          icon={group129}
        />
        <Card
          icon={group103}
        />
        <Card
          icon={group105}
        />
        <Card
          icon={group106}
        />

      </div>
    </div>
  );
};

export default FeatureSection;
