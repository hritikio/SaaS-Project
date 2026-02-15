type CardProps = {
  icon: string;
  nobox?:boolean;
}

const Card = ({ icon, nobox }: CardProps) => {

if(nobox){
    return (
      <div className="w-[370px] h-[371px] rounded bg-[#18181C] font-poppins flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 bg-[#222228] rounded-[30px] flex items-center justify-center">
            <img src={icon} alt="icon" className="w-20 h-20 " />
          </div>

          <h1 className="text-white text-xl font-semibold text-center mt-10">
            Fully Customizable
          </h1>

          <p className="text-[#9E9E9E] font-normal text-[14px] text-center max-w-[280px] ">
            A good design is not only aesthetically pleasing, but also
            functional. It should be able to solve the problem
          </p>
        </div>
      </div>
    );
}

  return (
    
    <div className="w-[370px] h-[371px] rounded-[20px] bg-[#18181C] font-poppins flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-24 h-24 bg-[#222228] rounded-[30px] flex items-center justify-center">
          <img src={icon} alt="icon" className="w-10 h-10 " />
        </div>

        <h1 className="text-white text-xl font-semibold text-center mt-10">
         Fully Customizable
        </h1>

        <p className="text-[#9E9E9E] font-normal text-[14px] text-center max-w-[280px] ">
         A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem 
        </p>
      </div>
    </div>
  );
};

export default Card;
