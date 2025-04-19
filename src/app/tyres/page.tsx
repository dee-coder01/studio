"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Tyres = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-lg backdrop-filter backdrop-blur-md rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Available Tyres</CardTitle>
          <CardDescription>Browse our wide selection of tyres.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* TODO: Implement Tyre Listing and Filters */}
          <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
            Placeholder for Tyre Listing and Filters
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tyres;
