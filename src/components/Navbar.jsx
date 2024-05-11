import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [hamMenu, setHamMenu] = useState(false);
  const handleClick = () => {
    setHamMenu(!hamMenu);
  };
  return (
    <nav className=" text-white flex items-center max-w-[1240px] mx-auto h-24 p-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
      <ul className="uppercase hidden md:flex ">
        <li className="p-4">home</li>
        <li className="p-4">company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">contact</li>
      </ul>
      <div onClick={handleClick} className="md:hidden block">
        {hamMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          hamMenu
            ? "w-[60%]  fixed top-0 left-0 h-full bg-[#000300] ease-in duration-500  border-r border-r-gray-900 "
            : "fixed left-[-100%] ease-in duration-500 "
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <li className="p-4 border-b border-b-gray-900">home</li>
        <li className="p-4 border-b border-b-gray-900">company</li>
        <li className="p-4 border-b border-b-gray-900">Resources</li>
        <li className="p-4 border-b border-b-gray-900">About</li>
        <li className="p-4  ">contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
