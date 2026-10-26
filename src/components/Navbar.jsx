import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { navMenuItem, portfolioLogo } from "../data/portfolioData";


export default function Navbar() {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full bg-dark-100 light:bg-white z-50 backdrop-blur-sm py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          {/* <a href="" className="text-2xl md:text-3xl font-bold text-white light:text-dark-200">
            Rakib
            <span className="text-purple"> AR</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a> */}
          <a href="#" className="text-2xl md:text-3xl font-bold text-white light:text-dark-200">
            <img src={portfolioLogo} alt="portfolio-logo-img" />
          </a>

        </div>
        <div className="hidden md:flex space-x-10">
          
          {navMenuItem.map((items, i) => (
            <a
            key={i}
            href={items.menuLink}
            className="relative text-white  transition duration-300 hover:text-purple group:"
          >
            <span>{items.menuName}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          ))}

          
        </div>
        {/* mobile button */}
        <div className="md:hidden">
            {showMenu ? 
            <FaXmark onClick={()=>setShowMenu(!showMenu)} /> : 
            <FaBars onClick={()=>setShowMenu(!showMenu)} />
            }
        </div>
      </div>

      {/* mobile menu */}
      {showMenu && (
        <div className="md:hidden bg-dark-300 h-screen mt-4 p-10 flex flex-col space-y-5">
            {navMenuItem.map((items, i) => (
            <a
            key={i}
            href={items.menuLink}
            className="relative text-white  transition duration-300 hover:text-purple group:"
          >
            <span>{items.menuName}</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
          ))}
        </div>
      )}
      
    </div>
  );
}
