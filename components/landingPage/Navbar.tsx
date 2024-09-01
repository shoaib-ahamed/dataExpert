"use client";
import Link from "next/link";
import React, { useState } from "react";
// import { Link } from "react-scroll";
// import {
//   Link,
//   Button,
//   Element,
//   Events,
//   animateScroll as scroll,
//   scrollSpy,
// } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 w-full  text-white p-8">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-bold">
          <Link href="/">Brand</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-400">
            Home
          </Link>
          <a href="/about" className="hover:text-gray-400">
            About
          </a>
          <a href="/services" className="hover:text-gray-400">
            Services
          </a>
          <Link href="/contact" className="hover:text-gray-400">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
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
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <a href="#home" className="block py-2 px-4 hover:bg-gray-700">
          Home
        </a>
        <a href="#about" className="block py-2 px-4 hover:bg-gray-700">
          About
        </a>
        <a href="#services" className="block py-2 px-4 hover:bg-gray-700">
          Services
        </a>
        <a href="#contact" className="block py-2 px-4 hover:bg-gray-700">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
