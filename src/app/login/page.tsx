"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Button as ButtonShad } from "@/components/ui/button";
import { Github, Mail } from 'lucide-react'; // Using Mail as a placeholder for Google, replace with appropriate icon if available

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700">
      <Card className="w-full max-w-md bg-black/20 shadow-lg rounded-lg overflow-hidden backdrop-filter backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
          <CardDescription className="text-gray-300">Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input type="text" id="username" placeholder="Username" className="mt-1 bg-gray-700/50 text-gray-100 border-gray-600" />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input type="password" id="password" placeholder="Password" className="mt-1 bg-gray-700/50 text-gray-100 border-gray-600" />
            </div>
          </form>
          <div className="flex justify-center items-center mt-4">
            <ButtonShad variant="outline" className="mr-2 text-gray-300 hover:text-white">
              <Github className="w-4 h-4 mr-2" />
              Github
            </ButtonShad>
            <ButtonShad variant="outline" className="text-gray-300 hover:text-white">
              <Mail className="w-4 h-4 mr-2" /> {/* Replace Mail with Google icon if available */}
              Google
            </ButtonShad>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between p-6">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white">Sign In</Button>
          <a className="text-sm text-gray-300 hover:text-teal-500 transition-colors" href="/signup">
            Don't have an account? Sign Up!
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
