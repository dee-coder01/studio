"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-lg backdrop-filter backdrop-blur-md rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input type="text" id="username" placeholder="Username" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="Password" className="mt-1" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between p-6">
          <Button>Sign In</Button>
          <a className="text-sm text-muted-foreground hover:text-primary" href="/signup">
            Don't have an account? Sign Up!
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
