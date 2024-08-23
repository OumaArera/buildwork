import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaServicestack } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from './logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-teal-500 p-6 flex justify-between items-center z-50 shadow-lg">
      <div className="flex items-center space-x-4">
        <img
          src={logo}
          alt="Logo"
          className="h-16 shadow-lg rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-105 hover:rotate-3"
        />
        <div className="hidden sm:block text-white">
          <h1 className="text-3xl font-bold">BuildWork Constructors</h1>
          <p className="text-sm font-light">Quality. Innovative. Construction.</p>
        </div>
      </div>
      <nav className="hidden md:flex space-x-8">
        <Link
          to="/"
          className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
        >
          <FaHome className="text-xl" />
          <span>Home</span>
        </Link>
        <Link
          to="/projects"
          className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
        >
          <FaProjectDiagram className="text-xl" />
          <span>Projects</span>
        </Link>
        <Link
          to="/services"
          className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
        >
          <FaServicestack className="text-xl" />
          <span>Services</span>
        </Link>
      </nav>
      <div className="md:hidden">
        <AiOutlineMenu
          className="text-white text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-teal-500 p-4 flex flex-col space-y-8 z-50">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src={logo}
                alt="Logo"
                className="h-16 shadow-lg rounded-full border-2 border-white transform transition-transform duration-300 hover:scale-105 hover:rotate-3"
              />
              <div className="text-white">
                <h1 className="text-2xl font-bold">BuildWork</h1>
              </div>
            </div>
            <AiOutlineClose
              className="text-white text-2xl cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <div className="text-center text-white">
            <p className="text-lg font-light">Quality. Innovative. Construction.</p>
          </div>
          <Link
            to="/"
            className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            <FaHome className="text-xl" />
            <span>Home</span>
          </Link>
          <Link
            to="/projects"
            className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            <FaProjectDiagram className="text-xl" />
            <span>Projects</span>
          </Link>
          <Link
            to="/services"
            className="flex items-center space-x-2 text-white text-lg font-medium hover:text-yellow-400 transition-colors duration-200"
            onClick={closeMenu}
          >
            <FaServicestack className="text-xl" />
            <span>Services</span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
