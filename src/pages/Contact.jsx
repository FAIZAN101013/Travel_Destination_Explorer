import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", 
        "your_template_id", 
        formRef.current,
        "your_user_id" 
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-8 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-bold text-center text-indigo-600 mb-6">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 text-center mb-12">
        Have any questions or need assistance? Feel free to reach out to us!
      </p>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="grid gap-6"
        >
          <div>
            <label className="block text-gray-800 font-medium mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-medium mb-2">Message</label>
            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold text-gray-800 mb-4">
          Get in Touch
        </h3>
        <p className="text-gray-600 mb-2">📍 Location: Pune, India</p>
        <p className="text-gray-600 mb-2">📧 Email: <a href="mailto:faizam.mpatel10@gmail.com" className="text-indigo-600 hover:underline">faizam.mpatel10@gmail.com</a></p>
        <p className="text-gray-600">📞 Phone: +91 8805910192</p>
      </div>
    </section>
  );
};

export default Contact;
