import { destinations } from "../data/destinations";
import DestinationCard from "./DestinationCard";

const DestinationList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {destinations.map((dest) => (
        <DestinationCard key={dest.id} destination={dest} />
      ))}
    </div>
  );
};

export default DestinationList;
