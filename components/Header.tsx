import Image from "next/image";

import { TbBell } from "react-icons/tb";
import { HiBolt } from "react-icons/hi2";
import { ImSearch } from "react-icons/im";

const Header = () => {
  return (
    <header className=" flex w-full justify-between  py-6 px-5 items-center">
      <div className="font-bold text-2xl">codedamn</div>
      <div className="flex gap-x-8 items-center text-[#71717A]  ">
        <div className="flex border rounded-xl py-1 p-1 text-normal items-center">
          <ImSearch className="px-2 text-3xl" />
          <input
            type="search"
            placeholder="Search"
            className="outline-none font-light"
          />
          <select className="bg-gray-100 p-2 rounded-md font-light capitalize">
            <option>Courses</option>
            <option>Javascript</option>
            <option>React</option>
            <option>C++</option>
            <option>Python</option>
            <option>NODE.JS</option>
          </select>
        </div>

        <p className="flex items-center gap-x-1 ">
          <HiBolt className="text-[#6366F1] text-2xl " />
          <span className="text-md font-bold">2</span>
        </p>
        <p className="relative">
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#EC4899] border border-red-500 flex justify-center items-center text-white">
            <small>5</small>
          </span>
          <TbBell className="text-2xl" />
        </p>
        <p className="relative ">
          <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black borders border-[#0EA5E9] flex justify-center items-center text-white font-semibold">
            <small>5</small>
          </span>
          <Image
            alt="profile"
            src={"/profile.jpeg"}
            className="aspect-square rounded-full "
            width={49}
            height={49}
          />
        </p>
      </div>
    </header>
  );
};

export default Header;
