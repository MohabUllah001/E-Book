import React, { useMemo } from "react";
import useBook from "../../../Data/useBook.JS";
import BookCard from "../../../Components/Shared/BookCard/BookCard";

const TopSell = () => {
  const { books, loading, error } = useBook();

  const topSellingBooks = useMemo(() => {
    if (!books?.length) return [];

    return [...books]
      .sort((a, b) => b.sellingQuantity - a.sellingQuantity)
      .slice(0, 4  ); // Top 4 best sellers
  }, [books]);

  if (loading) return <p className="text-center py-10">Loading top sellers...</p>;
  if (error) return <p className="text-center py-10 text-red-500">Failed to load books</p>;

  return (
    <section className="px-6 py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        🔥 Top Selling Books
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {topSellingBooks.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default TopSell;
