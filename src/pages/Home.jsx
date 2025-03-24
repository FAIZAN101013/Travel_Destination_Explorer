import HeroSection from "../components/HeroSection";

const Home = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <HeroSection />

      {/* Welcome Section */}
      <section className="text-center py-8 bg-white shadow-md">
        <h2 className="text-2xl sm:text-4xl font-bold text-indigo-600 mb-4">
          Welcome to Travel Explorer
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
          Embark on unforgettable journeys and explore the world's most
          breathtaking destinations. Adventure awaits!
        </p>
      </section>

      {/* Highlights Section */}
      <section className="py-12">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Why Choose Us?
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">Unique Destinations</h4>
            <p className="text-gray-600">
              Discover handpicked experiences that you'll treasure forever.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">Expert Guides</h4>
            <p className="text-gray-600">
              Travel with confidence and learn from the best in the industry.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h4 className="text-xl font-bold text-indigo-600 mb-2">Seamless Journeys</h4>
            <p className="text-gray-600">
              Enjoy hassle-free trips with all the details taken care of.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

