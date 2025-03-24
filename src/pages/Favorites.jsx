import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Your Favorite Treks</h1>
      <Link to="/destinations" className="text-blue-600 hover:underline">← Back to Destinations</Link>
      
      {favorites.length === 0 ? (
        <p className="text-gray-600 mt-4">No favorites added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {favorites.map((fav) => (
            <div key={fav.id} className="bg-white rounded-lg shadow p-4">
              <img src={fav.image} alt={fav.name} className="w-full h-40 object-cover rounded" />
              <h3 className="text-xl font-bold mt-2">{fav.name}</h3>
              <Link to={`/destination/${fav.id}`} className="text-blue-600 hover:underline mt-2 block">View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
