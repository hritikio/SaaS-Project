import Navsymbol from "../assets/Vector.svg";
import { Button } from "./UI/Button";
import Moon from "../assets/Moon.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="relative ">
      <nav className="relative   flex items-center justify-between px-11 py-6  max-w-[1200px] mx-auto overflow-hidden">
        <div className="flex w-32  items-center justify-between ">
          <img
            src={Navsymbol}
            className="bg-black w-[41px] h-[33px]  "
            alt="icon "
          />
          <h1 className="text-3xl font-semibold"> Squid</h1>
        </div>

        <div className="flex items-center   gap-8">
          <a href="#" className="text-[#9E9E9E] ">
            Home
          </a>
          <Button
            variant="gradient"
            size="md"
            onClick={() => navigate("/login")}
          >
            SingUp/Login
          </Button>
        </div>
      </nav>

      <img
        src={Moon}
        alt="moon"
        className="absolute left-[656px] top-[70px]  top-6 w-24 h-24 "
      />
    </div>
  );
};

export default Navbar;
