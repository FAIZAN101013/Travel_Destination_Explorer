import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 text-center mb-8">
        Have any questions or need assistance? Feel free to reach out to us.
      </p>

      {/* Contact Form */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <form className="grid gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
        <p className="text-gray-600">📍 Location: Pune, India</p>
        <p className="text-gray-600">📧 Email: Faizan.m.patel10@gmail.com</p>
        <p className="text-gray-600">📞 Phone: +91 8805910192</p>
      </div>
    </section>
  );
};

export default Contact;
