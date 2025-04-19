"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-secondary p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-foreground font-bold text-xl">
            TyreDeals
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/tyres" className={`hover:text-primary transition-colors ${pathname === '/tyres' ? 'font-bold' : ''}`}>
            Tyres
          </Link>
          <Link href="/contact" className={`hover:text-primary transition-colors ${pathname === '/contact' ? 'font-bold' : ''}`}>
            Contact Us
          </Link>
          <Link href="/about" className={`hover:text-primary transition-colors ${pathname === '/about' ? 'font-bold' : ''}`}>
            About Us
          </Link>
          <Link href="/login" className={`hover:text-primary transition-colors ${pathname === '/login' ? 'font-bold' : ''}`}>
            Login
          </Link>
          <Link href="/signup" className={`hover:text-primary transition-colors ${pathname === '/signup' ? 'font-bold' : ''}`}>
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
