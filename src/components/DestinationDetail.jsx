import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations';
import DestinationDetail from '../components/DestinationDetail';
import Loader from '../components/Loader';

const DestinationDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Clear any previous destination
    setDestination(null);
    setError(false);
    setLoading(true);
    
    // Convert string ID from URL to number to match your data structure
    const numericId = parseInt(id);
    
    if (isNaN(numericId)) {
      setError(true);
      setLoading(false);
      return;
    }
    
    // Find destination by ID
    const foundDestination = destinations.find(d => d.id === numericId);
    
    if (foundDestination) {
      setDestination(foundDestination);
      // Set page title
      document.title = `${foundDestination.name} | Trek Adventures`;
    } else {
      setError(true);
    }
    
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-16 px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Destination Not Found</h2>
          <p className="text-gray-600 mb-8">We couldn't find the destination you're looking for.</p>
          <button
            onClick={() => navigate('/destinations')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md"
          >
            View All Destinations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8 bg-gray-50 min-h-screen">
      <DestinationDetail destination={destination} />
    </div>
  );
};

export default DestinationDetailPage;