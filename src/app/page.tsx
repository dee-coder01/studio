'use client';

import React from 'react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";
import { Navigation } from 'lucide-react';

const Home = () => {
  const adminLocation = "New York"; // Static admin location
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(adminLocation)}`;
  const { toast } = useToast();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Your Journey Starts Here.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground text-center mb-4">
        Find the perfect tyres for your vehicle at unbeatable prices.
      </p>

      <div className="mb-8">
        <Link
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2"
        >
          <Navigation className="mr-2 h-4 w-4" /> Find Me
        </Link>
      </div>

      <div className="flex space-x-4">
        <Link href="/login" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2">
          Login
        </Link>
        <Link href="/signup" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
