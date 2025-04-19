"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Navigation } from 'lucide-react';

const NavBar = () => {
  const pathname = usePathname();
    const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const adminLocation = "New York"; // Static admin location
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adminLocation)}`;

  const [isLoggedIn, setIsLoggedIn] = React.useState(false); // Track login status

    // Function to handle logout
    const handleLogout = () => {
        setIsLoggedIn(false);
        router.push('/'); // Redirect to home page after logout
    };


  return (
    <nav className="bg-secondary p-4 flex items-center justify-between rounded-lg shadow-md backdrop-filter backdrop-blur-md">
      <Link href="/" className="text-foreground font-bold text-xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 mr-2">
          <path d="M12 3C7.58172 3 4 6.58172 4 11C4 15.4183 7.58172 19 12 19C16.4183 19 20 15.4183 20 11C20 6.58172 16.4183 3 12 3ZM12 5C15.3109 5 18 7.6891 18 11C18 14.3109 15.3109 17 12 17C8.6891 17 6 14.3109 6 11C6 7.6891 8.6891 5 12 5ZM11 8H13V14H11V8Z" />
        </svg>
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
              {!isLoggedIn && (
                  <>
                      <Link href="/login" className={`hover:text-primary transition-colors ${pathname === '/login' ? 'font-bold' : ''}`}>
                          Login
                      </Link>
                      <Link href="/signup" className={`hover:text-primary transition-colors ${pathname === '/signup' ? 'font-bold' : ''}`}>
                          Sign Up
                      </Link>
                  </>
              )}
              {isLoggedIn && (
                  <Button variant="ghost" onClick={handleLogout}>
                      Logout
                  </Button>
              )}
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
          {!isLoggedIn && (
              <>
                  <Link href="/login" className={`hover:text-primary transition-colors ${pathname === '/login' ? 'font-bold' : ''}`}>
                      Login
                  </Link>
                  <Link href="/signup" className={`hover:text-primary transition-colors ${pathname === '/signup' ? 'font-bold' : ''}`}>
                      Sign Up
                  </Link>
              </>
          )}
          {isLoggedIn && (
              <Button variant="ghost" onClick={handleLogout}>
                  Logout
              </Button>
          )}
        <Button asChild>
          <Link
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
          >
            <Navigation className="mr-2 h-4 w-4" /> Find Me
          </Link>
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
