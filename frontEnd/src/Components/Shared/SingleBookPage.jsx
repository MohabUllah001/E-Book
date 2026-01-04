import React from "react";
import BookImg from "../../../Pictures/ABC.jpg";

const SingleBookPage = () => {
  // dynamic-ready book object
  const book = {
    id: "book_101",
    title: "Following the Call",
    author: "Wendell Berry",
    price: 14.99,
    description:
      "Fifty-two thoughtful readings designed to inspire weekly group discussion and personal reflection, centered around the teachings of Jesus and timeless spiritual wisdom from renowned thinkers.",
    image: BookImg,
  };

  const handleAddToCart = (book) => {
    console.log("Added to cart:", book);
    // later: context / redux / backend
  };

  return (
    <section className="bg-[#f2f7fb] py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

        {/* ===== Sticky Book Image ===== */}
        <div className="flex justify-center sticky top-24 self-start">
          <img
            src={book.image}
            alt={book.title}
            className="w-[320px] rounded-xl shadow-2xl"
          />
        </div>

        {/* ===== Book Details ===== */}
        <div className="space-y-6">
          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#000080]">
            {book.title}
          </h1>

          {/* Author */}
          <p className="text-lg text-[#6D8196]">
            by{" "}
            <span className="font-semibold text-[#0047AB]">
              {book.author}
            </span>
          </p>

          {/* Price */}
          <p className="text-2xl font-bold text-[#0047AB]">
            ${book.price}
          </p>

          {/* Short Description */}
          <p className="text-[#6D8196] leading-relaxed max-w-xl">
            {book.description}
          </p>

          {/* ===== Add to Cart Button ===== */}
          <div className="pt-4">
            <button
              onClick={() => handleAddToCart(book)}
              className="border-2 border-[#0047AB] text-[#0047AB] 
                         px-10 py-3 rounded-full font-semibold
                         hover:bg-[#0047AB] hover:text-white transition"
            >
              Add to Cart
            </button>
          </div>

          {/* ===== Reviews ===== */}
          {/* ===== Reviews (Compact) ===== */}
<div className="pt-6 border-t border-[#82C8E5]/40">
  <h3 className="text-lg font-bold text-[#000080] mb-3">
    Reviews
  </h3>

  <div className="space-y-3">
    {/* Review 1 */}
    <div className="bg-white px-4 py-3 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#0047AB] text-sm">
          Sarah Ahmed
        </span>
        <span className="text-xs text-[#6D8196]">
          ⭐⭐⭐⭐⭐
        </span>
      </div>
      <p className="text-sm text-[#6D8196] mt-1">
        Beautifully written and inspiring.
      </p>
    </div>

    {/* Review 2 */}
    <div className="bg-white px-4 py-3 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-[#0047AB] text-sm">
          Imran Hossain
        </span>
        <span className="text-xs text-[#6D8196]">
          ⭐⭐⭐⭐☆
        </span>
      </div>
      <p className="text-sm text-[#6D8196] mt-1">
        Thought-provoking and well structured.
      </p>
    </div>
  </div>
</div>

        </div>

      </div>
    </section>
  );
};

export default SingleBookPage;
