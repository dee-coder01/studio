import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-6xl font-bold text-center mb-8 gradient-heading">
        TyreDeals
      </h1>
      <p className="text-lg text-gray-400 text-center mb-12">
        Find the best tyre deals online.
      </p>
      {/* TODO: Implement Carousel Component */}
      <div className="w-3/4 h-64 bg-gray-800 rounded-lg flex items-center justify-center">
        Placeholder for Tyre Carousel
      </div>
    </div>
  );
};

export default Home;

    