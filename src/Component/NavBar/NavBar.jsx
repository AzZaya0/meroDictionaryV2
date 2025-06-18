import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" fixed z-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">YourBrand</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Home</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Services</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Get Started
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
          <a href="#" className="block text-gray-600 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Portfolio</a>
          <a href="#" className="block text-gray-600 hover:text-blue-600">Contact</a>
          <a href="#" className="block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md text-center hover:bg-blue-700">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
