import Navsymbol from "../assets/Vector.svg"
import { Button } from "./UI/Button";



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-11 py-6 border max-w-[1200px] mx-auto overflow-x-hidden">
      <div className="flex w-32  items-center justify-between ">
        <img src={Navsymbol} className="bg-black w-[41px] h-[33px]  " alt="icon " />
        <h1 className="text-3xl font-semibold"> Squid</h1>
      </div>

      <div className="flex items-center   gap-8">
        <a href="#" className="text-[#9E9E9E] hover:text-black">
          Home
        </a>
        <Button variant="gradient" size="lg" onClick={()=>console.log("btn 1st clicked")} >Download Template</Button>
      </div>
    </nav>
  );
};

export default Navbar;
