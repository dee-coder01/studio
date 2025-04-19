"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-secondary p-4 flex items-center justify-between">
      <Link href="/" className="text-foreground font-bold text-xl">
        TyreDeals
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="sm:max-w-sm">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Navigate through the app.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
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
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex space-x-4 items-center">
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
    </nav>
  );
};

export default NavBar;
