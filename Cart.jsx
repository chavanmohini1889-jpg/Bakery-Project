import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="min-h-screen bg-pink-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-pink-700 mb-6 text-center">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div>
                  <h2 className="text-lg font-semibold text-pink-600">
                    {item.name}
                  </h2>
                  <p className="text-gray-600">
                    ₹{item.price} × {item.qty} ={" "}
                    <span className="font-bold">₹{item.price * item.qty}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total */}
          <div className="text-right text-xl font-bold text-yellow-700">
            Total: ₹
            {cart.reduce((acc, item) => acc + item.price * item.qty, 0)}
          </div>
        </div>
      )}
    </div>
  );
}
