import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // 👈 use this for smooth scrolling
import { Link as RouterLink } from "react-router-dom"; // 👈 still keep router links
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <RouterLink
          to="/"
          className="text-2xl font-serif font-bold text-blue-600 hover:text-blue-800 transition-colors duration-300"
        >
          Public Feedback
        </RouterLink>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {["home", "about", "dashboard", "reports"].map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={100}
                offset={-20} 
                spy={true}
                activeClass="text-blue-600 font-semibold"
                className="cursor-pointer relative group transition-colors duration-300"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Feedback Button */}
        <div className="hidden md:block">
          <RouterLink
            to="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Give Feedback
          </RouterLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 py-4 space-y-4 text-gray-700 font-medium animate-slideDown">
          {["home", "about", "dashboard", "reports"].map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={600}
              offset={-70}
              spy={true}
              activeClass="text-blue-600 font-semibold"
              className="block cursor-pointer hover:text-blue-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
          <RouterLink
            to="/signup"
            className="block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
          >
            Give Feedback
          </RouterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
