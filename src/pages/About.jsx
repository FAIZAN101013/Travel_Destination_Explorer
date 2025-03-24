const About = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        About Us
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Welcome to our travel adventure platform! We help explorers find and experience the most breathtaking destinations worldwide.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Mission */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            We aim to inspire and empower travelers by providing information on the best trekking and adventure destinations, helping them plan unforgettable journeys.
          </p>
        </div>

        {/* Vision */}
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To build a global community of adventurers and nature lovers by offering the most insightful travel guides and destination highlights.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our team is made up of passionate travelers, adventure seekers, and trekking experts dedicated to helping you explore the world.
        </p>
      </div>
    </section>
  );
};

export default About;
