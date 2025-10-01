// src/Components/Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-pink-50 flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-pink-700 mb-6">Contact Us</h1>
      <p className="max-w-2xl text-center text-lg text-gray-700 mb-12">
        Have a question, want to place an order, or just say hello?  
        We’d love to hear from you! Reach out using the form below or our contact details.
      </p>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mb-12">
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">Address</h2>
          <p className="text-gray-600">123 Bakery Lane, Sweet City, India</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">Phone</h2>
          <p className="text-gray-600">+91 98765 43210</p>
        </div>
        <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
          <h2 className="text-xl font-semibold text-pink-600 mb-2">Email</h2>
          <p className="text-gray-600">sweetcravings@bakery.com</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-3xl">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
