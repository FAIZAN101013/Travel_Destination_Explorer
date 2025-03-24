import React from "react";
import DestinationCard from "./DestinationCard";

const DestinationList = ({ destinations }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {destinations.length > 0 ? (
        destinations.map((dest) => (
          <DestinationCard key={dest.id} destination={dest} />
        ))
      ) : (
        <p className="text-gray-600 text-center">No destinations found.</p>
      )}
    </div>
  );
};

export default DestinationList;
