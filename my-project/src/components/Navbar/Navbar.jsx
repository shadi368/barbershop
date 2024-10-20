import React, { useState } from 'react';
import logo from '../../assets/download.jpg';
import { Link } from 'react-router-dom';

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
            <Link to="/">Barber Shop</Link>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/home" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">About</Link>
          <Link to="/services" className="text-white hover:text-gray-200">Services</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
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
        <Link to="/home" className="block text-white hover:bg-blue-700 p-2">Home</Link>
        <Link to="/about" className="block text-white hover:bg-blue-700 p-2">About</Link>
        <Link to="/services" className="block text-white hover:bg-blue-700 p-2">Services</Link>
        <Link to="/contact" className="block text-white hover:bg-blue-700 p-2">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;