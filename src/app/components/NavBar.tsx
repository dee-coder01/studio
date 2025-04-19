"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-100 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <Link href="/" className={`hover:text-teal-500 transition-colors ${pathname === '/' ? 'font-bold' : ''}`}>
          Home
        </Link>
        <Link href="/login" className={`hover:text-teal-500 transition-colors ${pathname === '/login' ? 'font-bold' : ''}`}>
          Login
        </Link>
        <Link href="/signup" className={`hover:text-teal-500 transition-colors ${pathname === '/signup' ? 'font-bold' : ''}`}>
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
