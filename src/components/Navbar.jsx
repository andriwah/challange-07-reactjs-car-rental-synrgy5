import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#F1F3FF] w-full h-[70px] fixed z-10">
      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        {/* Desktop */}
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="hidden md:flex">
          <ul className="flex text-black items-center">
            <li className="p-4 hover:text-green-400">Our Service</li>
            <li className="p-4 hover:text-green-400">Why Us</li>
            <li className="p-4 hover:text-green-400">Testimonial</li>
            <li className="p-4 hover:text-green-400">FAQ</li>
            <button className="ml-4 bg-[#5CB85F] hover:bg-green-300 text-white font-bold py-2 px-4 border border-grey-100 rounded">Register</button>
          </ul>
        </div>

        {/* Hamburger Menu */}
        <div className="mx-4 items-center md:hidden z-10">
          <button onClick={handleNav}>{!nav ? <AiOutlineMenu className="z-10" size={30} /> : <AiOutlineClose size={30} className="z-10" />}</button>
        </div>

        {/* Mobile Menu */}
        <ul className={nav ? 'md:hidden fixed right-0 top-0 w-[50%] h-full bg-white ease-in-out duration-300' : 'ease-in-out duration-300 fixed left-[-100%]'}>
          <h1 className="w-full text-3xl font-bold text-black m-4">BCR</h1>
          <li className="p-4  hover:text-green-400">Our Service</li>
          <li className="p-4  hover:text-green-400">Why Us</li>
          <li className="p-4  hover:text-green-400">Testimonial</li>
          <li className="p-4  hover:text-green-400">FAQ</li>
          <button className="ml-4 bg-[#5CB85F] hover:bg-green-300 text-white font-bold py-2 px-4 border border-grey-100 rounded">Register</button>
        </ul>
      </div>
    </div>
  );
}
