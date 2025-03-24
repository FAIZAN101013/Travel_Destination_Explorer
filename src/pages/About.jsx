const About = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-8 bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-indigo-600 mb-4">About Us</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Welcome to our travel adventure platform! We help explorers find and experience the most breathtaking destinations worldwide.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-gray-600 leading-relaxed">
            We aim to inspire and empower travelers by providing information on the best trekking and adventure destinations, helping them plan unforgettable journeys.
          </p>
        </div>

        {/* Vision */}
        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-indigo-600">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
          <p className="text-gray-600 leading-relaxed">
            To build a global community of adventurers and nature lovers by offering the most insightful travel guides and destination highlights.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Meet Our Team</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          Our team is made up of passionate travelers, adventure seekers, and trekking experts dedicated to helping you explore the world.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800">Jane Doe</h4>
            <p className="text-sm text-gray-600">Adventure Specialist</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800">John Smith</h4>
            <p className="text-sm text-gray-600">Trekking Guide</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800">Emily Clark</h4>
            <p className="text-sm text-gray-600">Destination Expert</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
