import Navsymbol from "../assets/Vector.svg"



const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-10 py-6 border">
      <div className="flex w-32 ml-[165px]">
        <img src={Navsymbol} className="bg-black   " alt="icon " />
        <h1 className="text-xl font-semibold"> Squid</h1>
      </div>

      <div className="flex items-center gap-6">
        <a href="#" className="text-gray-400 hover:text-black">
          Home
        </a>
        <button className="rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-2 text-sm font-medium">
          Download Template
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
