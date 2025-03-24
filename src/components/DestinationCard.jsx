import React from 'react';
import { Link } from 'react-router-dom';

const DestinationCard = ({ destination }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={destination.image} 
          alt={destination.name} 
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {destination.difficulty}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{destination.location}</p>
        <p className="text-gray-700 mb-4 line-clamp-3">{destination.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">Best: {destination.bestSeason}</span>
          <Link 
            to={`/destinations/${destination.id}`} 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;