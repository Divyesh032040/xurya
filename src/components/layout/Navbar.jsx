
import React from 'react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom'; // Use this if routing; otherwise use <a>


const Navbar = () => {
  return (
    <header className="w-full bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded bg-green-500"></div>
          <span className="text-lg font-semibold text-gray-800">Xurya</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-green-600">Home</a></li>
          <li><a href="#" className="hover:text-green-600">About Us</a></li>
          <li><a href="#" className="hover:text-green-600">Features</a></li>
          <li><a href="#" className="hover:text-green-600">Services</a></li>
          <li><a href="#" className="hover:text-green-600">Contact</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button className="border border-gray-300 text-gray-700 bg-white hover:bg-gray-100">
            Log in
          </Button>
          <Button className="bg-green-500 text-white hover:bg-green-600">
            Get in touch
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
