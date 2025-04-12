"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

type Props = {};

function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-violet-600 p-4 shadow-2xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">SRS</div>
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-violet-600 md:bg-transparent w-full left-0 top-16 md:w-auto md:flex-row flex-col items-center p-4 md:p-0 transition-all ${
            isOpen ? "block" : "hidden"
          } text-white`}
        >
          <li  className="font-bold hover:text-violet-300 transition-all">
            <a href="#home" >Home</a>
          </li>
          <li className="font-bold hover:text-violet-300 transition-all">
            <a href="#about">About</a>
          </li>
          <li className="font-bold hover:text-violet-300 transition-all">
            <a href="#">Service</a>
          </li>
          <li className="font-bold hover:text-violet-300 transition-all">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
