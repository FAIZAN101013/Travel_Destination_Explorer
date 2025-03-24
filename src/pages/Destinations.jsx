import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import DestinationList from "../components/DestinationList";
import { destinations } from "../data/destinations";

const Destinations = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState("All");

  const difficulties = ["All", "Easy", "Moderate", "Hard"];

  // Filter destinations based on search and difficulty
  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch =
      destination.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDifficulty =
      difficultyFilter === "All" || destination.difficulty === difficultyFilter;

    return matchesSearch && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Explore Epic Treks</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the world's most breathtaking hiking trails and adventures.
          </p>
        </div>

        {/* Search Bar & Filters */}
        <div className="mb-12">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} destinations={destinations} />

          <div className="flex justify-center mt-6 space-x-2 flex-wrap">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                onClick={() => setDifficultyFilter(difficulty)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors m-1 ${
                  difficultyFilter === difficulty
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Destination List */}
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl text-gray-600">
              No destinations found matching "{searchQuery}"
            </h3>
            <button
              onClick={() => {
                setSearchQuery("");
                setDifficultyFilter("All");
              }}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-gray-600 mb-6">
              Showing {filteredDestinations.length} {filteredDestinations.length === 1 ? "trek" : "treks"}
            </p>
            <DestinationList destinations={filteredDestinations} />
          </>
        )}
      </div>
    </div>
  );
};

export default Destinations;
