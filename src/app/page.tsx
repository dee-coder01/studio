'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [location, setLocation] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
            .then(response => response.json())
            .then(data => {
              if (data.address) {
                setLocation(data.address.city || data.address.town || data.address.village || 'Unknown Location');
              } else {
                setLocation('Location not found');
              }
            })
            .catch(() => {
              setLocation('Error fetching location');
            });
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation('Location unavailable');
          toast({
            title: "Location Error",
            description: "Please enable location services to see your current location.",
          });
        }
      );
    } else {
      setLocation('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Your Journey Starts Here.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground text-center mb-4">
        Find the perfect tyres for your vehicle at unbeatable prices.
      </p>
       {location && (
          <p className="text-sm text-muted-foreground text-center mb-8">
            Your current location: {location}
          </p>
        )}
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
