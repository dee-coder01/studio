import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-6xl font-bold text-center mb-8 gradient-heading">
        TyreDeals
      </h1>
      <p className="text-2xl text-gray-400 text-center mb-12">
        Quality Tyres, Unbeatable Deals.
      </p>
      <div className="flex space-x-4">
        <Link href="/login" className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </Link>
        <Link href="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
