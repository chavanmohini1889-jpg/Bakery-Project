// src/Components/About.jsx
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-yellow-50 flex flex-col items-center py-12 px-4">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-pink-700 mb-6">About Us</h1>
      <p className="max-w-3xl text-center text-lg text-gray-700 mb-12">
        Welcome to <span className="font-semibold">Sweet Cravings Bakery</span>!  
        We’re passionate about creating delicious, handcrafted treats that warm your
        heart and bring smiles to your table. From classic breads to delightful
        cakes and cookies, our mission is to serve freshness and love in every bite.
      </p>

      {/* About Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">Our Story</h2>
          <p className="text-gray-600">
            Starting as a small family kitchen in 2010, we’ve grown into a 
            community-loved bakery while keeping our homemade touch alive.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">Our Mission</h2>
          <p className="text-gray-600">
            To bake with love and care, using fresh ingredients and time-tested
            recipes, ensuring each product is as delightful as the last.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">Why Choose Us?</h2>
          <p className="text-gray-600">
            Because every treat is baked fresh daily, beautifully crafted, and 
            delivered with the promise of happiness in every bite.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-bold text-yellow-700 mb-3">
          Come Taste the Difference!
        </h3>
        <p className="text-gray-700 mb-5">
          Visit us today or order online to experience bakery bliss.
        </p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl shadow-md transition">
          Explore Menu
        </button>
      </div>
    </div>
  );
};

export default About;
