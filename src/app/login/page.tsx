"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Icons } from "@/components/icons";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
	const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      (username === 'abc' && password === '123') ||
      (username === 'def' && password === '456')
    ) {
      // Successful login
      setError('');
			router.push('/'); // Redirect to home page
    } else {
      // Invalid credentials
      setError('Invalid username or password');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 p-4">
      <Card className="w-full max-w-md bg-black/20 shadow-lg rounded-lg overflow-hidden backdrop-filter backdrop-blur-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-white">Login</CardTitle>
          <CardDescription className="text-gray-300">Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {error && (
            <Alert variant="destructive">
              <Icons.close className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="username" className="text-gray-300">Username</Label>
              <Input
                type="text"
                id="username"
                placeholder="Username"
                className="mt-1 bg-gray-700/50 text-gray-100 border-gray-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password" className="text-gray-300">Password</Label>
              <Input
                type="password"
                id="password"
                placeholder="Password"
                className="mt-1 bg-gray-700/50 text-gray-100 border-gray-600"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white w-full mt-4" type="submit">
              Sign In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between p-6">
          <a className="text-sm text-gray-300 hover:text-teal-500 transition-colors" href="/signup">
            Don't have an account? Sign Up!
          </a>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
