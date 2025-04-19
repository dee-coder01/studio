"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Button as ButtonShad } from "@/components/ui/button";
import {
  Github,
  Google,
} from 'lucide-react';

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-lg rounded-lg overflow-hidden border">
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
          <div className="flex justify-center items-center mt-4">
            <ButtonShad variant="outline" className="mr-2">
              <Github className="w-4 h-4 mr-2" />
              Github
            </ButtonShad>
            <ButtonShad variant="outline">
              <Google className="w-4 h-4 mr-2" />
              Google
            </ButtonShad>
          </div>
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
