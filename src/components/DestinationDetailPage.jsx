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

  useEffect(() => {
    // Simulate API fetch with a small delay
    setLoading(true);
    setTimeout(() => {
      const foundDestination = destinations.find(d => d.id === parseInt(id));
      
      if (foundDestination) {
        setDestination(foundDestination);
        // Set page title
        document.title = `${foundDestination.name} | Trek Adventures`;
      } else {
        navigate('/not-found');
      }
      
      setLoading(false);
    }, 500);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader />
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