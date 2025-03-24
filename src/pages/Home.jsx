import React from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="text-center py-12 bg-white shadow-md">
        <h2 className="text-3xl sm:text-5xl font-bold text-indigo-700 mb-4 animate-fade-in">
          Welcome to Travel Explorer
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Embark on unforgettable journeys and explore the world's most
          breathtaking destinations. Adventure awaits!
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-16 px-6">
        <h3 className="text-3xl font-semibold text-center text-gray-900 mb-10">
          Why Choose Us?
        </h3>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Unique Destinations",
              description: "Discover handpicked experiences that you'll treasure forever.",
              icon: "🌍",
            },
            {
              title: "Expert Guides",
              description: "Travel with confidence and learn from the best in the industry.",
              icon: "👨‍🏫",
            },
            {
              title: "Seamless Journeys",
              description: "Enjoy hassle-free trips with all the details taken care of.",
              icon: "✈️",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
            >
              <div className="text-4xl">{item.icon}</div>
              <h4 className="text-xl font-bold text-indigo-700 mt-3">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
          </section>
          <Testimonials/>
    </div>
  );
};

export default Home;
