import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { destinations } from "../data/destinations";

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const foundDestination = destinations.find((dest) => dest.id.toString() === id);
    if (foundDestination) {
      setDestination(foundDestination);
    }
    setLoading(false);

    // Load favorites from localStorage
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, [id]);

  // Toggle Favorite Function
  const toggleFavorite = () => {
    let updatedFavorites = [...favorites];

    if (favorites.some((fav) => fav.id === destination.id)) {
      updatedFavorites = updatedFavorites.filter((fav) => fav.id !== destination.id);
    } else {
      updatedFavorites.push(destination);
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            We couldn't find the trek you're looking for.
          </p>
          <Link
            to="/destinations"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Back to All Treks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/destinations"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          ← Back to All Treks
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
          {/* Heart Button in the Top Right Corner */}
          <button
            onClick={toggleFavorite}
            className="absolute top-4 right-4 text-3xl transition-transform transform hover:scale-110"
          >
            {favorites.some((fav) => fav.id === destination.id) ? (
              <span className="text-red-500">❤️</span>
            ) : (
              <span className="text-gray-400">🤍</span>
            )}
          </button>

          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-96 object-cover"
          />

          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between mb-6">
              <h1 className="text-4xl font-bold text-gray-900">{destination.name}</h1>
              <span
                className={`px-3 py-1 text-sm font-medium rounded-full ${
                  destination.difficulty === "Easy"
                    ? "bg-green-100 text-green-800"
                    : destination.difficulty === "Moderate"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {destination.difficulty}
              </span>
            </div>

            <p className="text-xl text-gray-600 mb-6">{destination.location}</p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-green-700 mb-2">Standard Plan</h3>
                <p className="text-gray-600">
                  Includes guided trek, meals, and accommodation in shared huts.
                </p>
                <p className="text-lg font-bold text-green-700 mt-2">$499/person</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg shadow">
                <h3 className="font-semibold text-green-700 mb-2">Premium Plan</h3>
                <p className="text-gray-600">
                  Includes all Standard Plan features plus private rooms and premium meals.
                </p>
                <p className="text-lg font-bold text-green-700 mt-2">$799/person</p>
              </div>
            </div>

            {/* Buy Now Button (Not Removed) */}
            <div className="text-center mt-6">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              >
                Buy Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
