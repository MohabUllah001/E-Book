import React from "react";
import BookCard from "../../Components/Shared/BookCard/BookCard";
import useBook from "../../Data/useBook.JS";

const AllBooks = () => {

  const { books, loading, error } = useBook();

  if (loading) return <p className="text-center py-20">Loading books...</p>;
  if (error) return <p className="text-center py-20 text-red-600">{error}</p>;
  if (!books || books.length === 0)
    return <p className="text-center py-20">No books available.</p>;

  return (
    <section className="bg-[#f2f7fb] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Page Header */}
        <h2 className="text-3xl font-bold text-[#000080] mb-10">
          Browse All Books
        </h2>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllBooks;
