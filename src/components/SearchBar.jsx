import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';

const SearchBar = ({ searchQuery, setSearchQuery, destinations }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // Generate suggestions based on input
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSuggestions([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    
    // Extract unique locations from destinations
    const locations = [...new Set(destinations.map(dest => dest.location.split(',')[0].trim()))];
    
    // Find matching destinations and locations
    const matchingDestinations = destinations
      .filter(dest => 
        dest.name.toLowerCase().includes(query) || 
        dest.location.toLowerCase().includes(query))
      .map(dest => ({ type: 'destination', value: dest.name }));
      
    const matchingLocations = locations
      .filter(location => location.toLowerCase().includes(query))
      .map(location => ({ type: 'location', value: location }));
      
    // Combine and limit results
    const combined = [...matchingDestinations, ...matchingLocations];
    setSuggestions(combined.slice(0, 5));
    
  }, [searchQuery, destinations]);

  // Handle clicks outside of the component
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.value);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowSuggestions(false);
  };

  return (
    <div className="relative max-w-md w-full mx-auto" ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder="Search for treks or locations..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="w-full pl-10 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        
        {searchQuery && (
          <button 
            onClick={clearSearch} 
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={18} />
          </button>
        )}
      </div>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
            >
              <Search size={16} className="text-gray-400 mr-2" />
              <div>
                <span className="text-gray-800">{suggestion.value}</span>
                <span className="ml-2 text-xs text-gray-500">
                  {suggestion.type === 'destination' ? 'Trek' : 'Location'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;