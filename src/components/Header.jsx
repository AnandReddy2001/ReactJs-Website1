import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#2699fb]  sticky top-0 z-50 border-b border-white border-opacity-25 shadow-lg">
      <div className="max-w-[1240px] py-[10px] mx-auto flex justify-between items-center">
        <div className="md:text-3xl text-2xl md:ml-0 ml-4 font-bold text-white">
          RamailoTech
        </div>

        {toggle ? (
          <AiOutlineClose
            onClick={() => setToggle(!toggle)}
            className="text-white md:text-3xl text-2xl md:mr-0 mr-4 cursor-pointer md:hidden block"
          />
        ) : (
          <AiOutlineMenu
            onClick={() => setToggle(!toggle)}
            className="text-white md:text-3xl text-2xl md:mr-0 mr-4 cursor-pointer md:hidden block"
          />
        )}

        <ul className=" hidden md:flex gap-10 text-white cursor-pointer font-bold">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* this is for responsive menu */}

        <ul
          className={` duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[52px] cursor-pointer
          ${toggle ? "left-0" : "left-[100%]"}`}
        >
          <li className="p-5">Home</li>
          <li className="p-5">Company</li>
          <li className="p-5">Resources</li>
          <li className="p-5">About</li>
          <li className="p-5">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
