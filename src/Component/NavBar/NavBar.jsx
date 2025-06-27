import React, { useState } from "react";
import logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" fixed z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
        
            {/* <span className="text-xl font-bold text-blue-600">YourBrand</span> */}
         <Link to={'/'}>
          
            <img className="h-[70px] py-4" src={logo} alt="logo" />
          </Link> 
        

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <Link  to={'/'} className="text-gray-600 hover:text-green-500 transition">Home</Link>

            <Link to={'/contact'} className="text-gray-600 hover:text-green-500 transition">Contact</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="https://merovision.com/" target="blank" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Visit Mero Vision
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-2">
          <Link to={'/'} className="block text-gray-600 hover:text-blue-600">Home</Link>

          <Link to={'/contact'} className="block text-gray-600 hover:text-blue-600">Contact</Link>
          <a href="https://merovision.com/" target="blank"  className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700">
             Visit Mero Vision
          </a>
        </div>
      )}
    </header>
  );
}
