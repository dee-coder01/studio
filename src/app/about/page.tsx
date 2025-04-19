"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-lg rounded-lg overflow-hidden border">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">About Us</CardTitle>
          <CardDescription>Learn more about our mission and team.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            We are dedicated to providing the best tyre deals online. Our mission is to make tyre
            shopping easy, affordable, and transparent.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutUs;
