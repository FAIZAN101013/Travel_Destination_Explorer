import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      review: "An absolutely amazing experience! The guides were friendly, and the locations were breathtaking.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "David Smith",
      review: "Best travel experience ever! Everything was perfectly organized, and I had a fantastic time.",
      image: "https://randomuser.me/api/portraits/men/34.jpg",
    },
    {
      name: "Emily Brown",
      review: "Highly recommended! The attention to detail and hospitality made the trip unforgettable.",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      },
    
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h3 className="text-3xl font-semibold text-center text-gray-900 mb-8">
        What Our Travelers Say
      </h3>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition duration-300 hover:scale-105"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-indigo-600"
            />
            <h4 className="text-lg font-bold text-indigo-700">{testimonial.name}</h4>
            <p className="text-gray-600 mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
