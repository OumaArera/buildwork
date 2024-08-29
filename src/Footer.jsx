import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaServicestack } from 'react-icons/fa';

const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    
    <div>
        <br />
        <footer className="bg-teal-500 p-6 text-white">
        
        <div className="container mx-auto flex flex-col items-center">
          {/* Navigation Links */}
          <nav className="flex space-x-6 mb-4">
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
  
          {/* Contact Information */}
          <div className="text-center mb-4">
            <p className="text-lg font-light">Contact Us:</p>
            <p>
              <a
                href="https://wa.me/254727501494"
                className="text-yellow-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +254727501494
              </a>
            </p>
            <p>
              <a
                href="tel:+254727501494"
                className="text-yellow-400 hover:underline"
              >
                Call: +254727501494
              </a>
              {' | '}
              <a
                href="tel:+254702517815"
                className="text-yellow-400 hover:underline"
              >
                +254702517815
              </a>
            </p>
            <p>
              <a
                href="mailto:buildwork@gmail.com"
                className="text-yellow-400 hover:underline"
              >
                Email: buildwork@gmail.com
              </a>
            </p>
          </div>
  
          {/* Copyright and Contact Person */}
          <div className="text-center text-sm">
            <p>&copy; {getCurrentYear()} BuildWork Constructors. All rights reserved.</p>
            <p className="font-light">Contact Person: Brudox Odhiambo</p>
            <p className="mt-2">If you have any questions, feel free to reach out to us.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
