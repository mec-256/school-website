"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-800">
          SSKennedy School
        </Link>
        

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/academics" className="hover:text-blue-600">Academics</a>
          <a href="/facilities" className="hover:text-blue-600">Facilities</a>
          <a href="/admissions" className="hover:text-blue-600">Admissions</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
          <a href="/gallery" className="hover:text-blue-600">Gallery</a>

        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-blue-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 flex flex-col space-y-4 text-gray-700 font-medium shadow-md">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/academics">Academics</Link>
          <Link href="/facilities">Facilities</Link>
          <Link href="/admissions">Admissions</Link>
          <Link href="/contact">Contact</Link>

        </div>
      )}
    </nav>
  );
}
