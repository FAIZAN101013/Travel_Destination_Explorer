import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen md:h-96 lg:h-[500px] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
  backgroundImage: "url('https://picsum.photos/1600/900?random')"
}}

    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
      
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="relative max-w-2xl z-10 text-white p-6 md:p-8 backdrop-blur-sm bg-black/20 border border-white/10 rounded-lg transform transition-all">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Your Adventure <span className="text-blue-400">Starts Here</span>
          </h2>
          <p className="text-xl md:text-2xl mb-6 font-light">
            Find your next destination and make unforgettable memories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link 
              to="/destinations" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors shadow-lg text-center"
            >
              Explore Destinations
            </Link>
            <Link 
              to="/guides" 
              className="bg-transparent hover:bg-white/10 border border-white px-6 py-3 rounded-full font-medium transition-colors text-center"
            >
              View Travel Guides
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-4 right-4 flex gap-2">
        <div className="h-2 w-2 rounded-full bg-blue-400"></div>
        <div className="h-2 w-2 rounded-full bg-white"></div>
        <div className="h-2 w-2 rounded-full bg-white"></div>
      </div>
    </section>
  );
};

export default HeroSection;