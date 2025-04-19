"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-300 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <Link href="/" className={`hover:text-teal-500 transition-colors ${pathname === '/' ? 'font-bold' : ''}`}>
          Home
        </Link>
        <Link href="/tyres" className={`hover:text-teal-500 transition-colors ${pathname === '/tyres' ? 'font-bold' : ''}`}>
          Tyres
        </Link>
        <Link href="/contact" className={`hover:text-teal-500 transition-colors ${pathname === '/contact' ? 'font-bold' : ''}`}>
          Contact Us
        </Link>
        <Link href="/about" className={`hover:text-teal-500 transition-colors ${pathname === '/about' ? 'font-bold' : ''}`}>
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
