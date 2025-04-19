"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-lg backdrop-filter backdrop-blur-md rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>Create an account to start shopping.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Username" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" className="mt-1" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between p-6">
          <Button>Create Account</Button>
          <a className="text-sm text-muted-foreground hover:text-primary" href="/login">
            Already have an account? Login!
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
