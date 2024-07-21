import React from 'react';
import { Bars3Icon } from '@heroicons/react/outline'; // Import the hamburger icon

const Navbar = ({ openNav }) => {
  return (
    <div className="w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#00A3D4] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0-6] cursor-pointer text-[25px] text-white font-bold">
          Intern
          <span className="text-yellow-300"> World</span>
        </h1>

        <div className="nav-link"> Home </div>
        <div className="nav-link"> About Us </div>
        <div className="nav-link"> Internships </div>
        <div className="nav-link"> Ed Talks </div>
        <div className="nav-link"> FAQs </div>

        {/* hamburger icon  */}
        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
