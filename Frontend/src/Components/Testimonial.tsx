import { CompanyCard } from "./UI/CompanyCard"
import Frame from "../assets/Frame.svg"
import { Button } from "./UI/Button";
import World from "../assets/World.svg"
const Testimonial = () => {
  return (
    <div className="w-[1440px] h-[725px] font-poppins border mt-10 flex flex-col items-center mx-auto bg-[#18181C]">
      <h1 className="mt-28 font-semibold text-5xl leading-16 text-center">
        Companies we Worked
        <br /> With in Since 2015
      </h1>
      <div className="flex justify-between mt-[70px] gap-[30px] mb-[94px] ">
        <CompanyCard companyName={Frame} />
        <CompanyCard companyName={Frame} />
        <CompanyCard companyName={Frame} />
        <CompanyCard companyName={Frame} />
        <CompanyCard companyName={Frame} />
        <CompanyCard companyName={Frame} />
      </div>

      <div className="w-[1110px] h-[425px] border bg-linear-to-r from-[#FF9898] to-[#8054FF] rounded-[40px] flex  items-center justify-center gap-10 ">
        <div className="flex flex-col">
          <div className="ml-20">
            <p className="text-white text-2xl font-normal text-[20px] leading-[32px] mt-[99px] mb-[30px] ">
              Love our Our Tool?
            </p>
            <h1 className="text-5xl leading-[65px] font-semibold mb-8 ">
              <span className="block whitespace-nowrap">
                Feel Free to Join our{" "}
              </span>
              <span className="block">15 Days Free Trial</span>
            </h1>

            <Button variant="black" size="lg" >
              Download template
            </Button>
          </div>
        </div>
        <div>
          <img
            src={World}
            alt="World"
            className="w-[550px]  mt-10 "
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonial