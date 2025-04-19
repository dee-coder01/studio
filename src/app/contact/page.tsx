"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-background">
      <Card className="w-full max-w-md bg-card shadow-lg backdrop-filter backdrop-blur-md rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>We would love to hear from you!</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" placeholder="Your Name" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Your Email" className="mt-1" />
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your Message" rows={4} className="mt-1" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end p-6">
          <Button>Send Message</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ContactUs;
