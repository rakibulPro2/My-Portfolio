import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function Navbar() {
  let [showMenu, setShowMenu] = useState(false);
  return (
    <div className="w-full bg-dark-100 z-50 backdrop-blur-sm py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <a href="" className="text-2xl md:text-3xl font-bold text-white">
            Rakib
            <span className="text-purple"> AR</span>
            <div className="w-4 h-4 bg-purple rounded-full"></div>
          </a>
        </div>
        <div className="hidden md:flex space-x-10">
          <a
            href="#home"
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about"
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills"
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#project"
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Project</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#experience"
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact"
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
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
            <a
            href="#home" onClick={()=>setShowMenu(!showMenu)}
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Home</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#about" onClick={()=>setShowMenu(!showMenu)}
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#skills" onClick={()=>setShowMenu(!showMenu)}
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#project" onClick={()=>setShowMenu(!showMenu)}
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Project</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#experience" onClick={()=>setShowMenu(!showMenu)}
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="#contact" onClick={()=>setShowMenu(!showMenu)}
            className="relative text-white transition duration-300 hover:text-purple group:"
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
      )}
      
    </div>
  );
}
