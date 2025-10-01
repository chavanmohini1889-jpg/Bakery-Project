import React, { useState, useContext } from "react";
// import { CartContext } from "../context/CartContext";

const Products = () => {
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  // const { addToCart } = useContext(CartContext); // ⬅️ from context

  const products = [/* your product list */];

  const filteredProducts =
    category === "All"
      ? products
      : products.filter((p) => p.category === category);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "lowToHigh") return a.price - b.price;
    if (sort === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-yellow-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-8">
        Our Bakery Products
      </h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-4 py-2 border rounded-lg shadow">
          <option value="All">All Categories</option>
          <option value="Cake">Cakes</option>
          <option value="Cupcake">Cupcakes</option>
          <option value="Bread">Bread</option>
          <option value="Cookies">Cookies</option>
          <option value="Muffin">Muffins</option>
          <option value="Croissant">Croissants</option>
        </select>

        <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-4 py-2 border rounded-lg shadow">
          <option value="">Sort By</option>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {sortedProducts.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-pink-600 mb-2">{item.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-yellow-700">₹{item.price}</span>
                <button
                  // onClick={() => addToCart(item)} // ⬅️ add product to cart
                  className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No products found.</p>
      )}
    </div>
  );
};

export default Products;
