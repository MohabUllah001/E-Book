import React, { useState } from "react";
import BookImg from "../../../Pictures/ABC.jpg";

const BookCart = () => {
  // Cart state (single product now, scalable later)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Following the Call",
      author: "Wendell Berry",
      price: 14.99,
      image: BookImg,
    },
  ]);

  // Remove item from cart
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Calculate total
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <section className="bg-[#f2f7fb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#000080] mb-10">
          Your Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* ===== LEFT: Cart List ===== */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length === 0 ? (
              <div className="bg-white p-8 rounded-xl shadow text-center text-[#6D8196]">
                Your cart is empty.
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-sm p-6 flex flex-col sm:flex-row gap-6 items-center"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 rounded-lg shadow"
                  />

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#000080]">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#6D8196]">
                      by{" "}
                      <span className="text-[#0047AB] font-medium">
                        {item.author}
                      </span>
                    </p>
                  </div>

                  {/* Price */}
                  <p className="font-semibold text-[#0047AB]">
                    ${item.price}
                  </p>

                  {/* Remove */}
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-sm text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* ===== RIGHT: Billing Summary ===== */}
          <div className="bg-white rounded-xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-[#000080] mb-6">
              Billing Summary
            </h2>

            <div className="flex justify-between text-[#6D8196] mb-3">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-[#6D8196] mb-3">
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className="flex justify-between text-lg font-bold text-[#000080] border-t pt-4">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <button
              disabled={cartItems.length === 0}
              className={`w-full mt-6 py-3 rounded-full font-semibold transition
                ${
                  cartItems.length === 0
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-[#0047AB] text-white hover:bg-[#000080]"
                }
              `}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookCart;
