import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the destination that matches the ID from the URL
    const foundDestination = destinations.find(dest => dest.id.toString() === id);
    
    if (foundDestination) {
      setDestination(foundDestination);
    }
    
    setLoading(false);
  }, [id]);

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
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between mb-4">
              <h1 className="text-4xl font-bold text-gray-900">{destination.name}</h1>
              
              <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                destination.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                destination.difficulty === 'Moderate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {destination.difficulty}
              </span>
            </div>
            
            <p className="text-xl text-gray-600 mb-6">{destination.location}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Duration</h3>
                <p className="text-gray-700">{destination.duration || 'Not specified'}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Best Season</h3>
                <p className="text-gray-700">{destination.bestSeason || 'Year-round'}</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Elevation</h3>
                <p className="text-gray-700">{destination.elevation || 'Not specified'}</p>
              </div>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Trek</h2>
            <p className="text-gray-700 mb-6 whitespace-pre-line">{destination.description}</p>
            
            {/* Add more sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;