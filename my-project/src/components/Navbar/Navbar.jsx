import React, { useState } from 'react';
import logo from '../../assets/download.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="h-8 w-8" />

          <span className="text-white font-bold text-xl">
            <a href="/">Barber Shop</a>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-gray-200">Home</a>
          <a href="#" className="text-white hover:text-gray-200">About</a>
          <a href="#" className="text-white hover:text-gray-200">Services</a>
          <a href="#" className="text-white hover:text-gray-200">Contact</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block text-white hover:bg-blue-700 p-2">Home</a>
        <a href="#" className="block text-white hover:bg-blue-700 p-2">About</a>
        <a href="#" className="block text-white hover:bg-blue-700 p-2">Services</a>
        <a href="#" className="block text-white hover:bg-blue-700 p-2">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
