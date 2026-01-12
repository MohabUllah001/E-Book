import { useEffect, useState } from "react";

const useBook = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBooks = async () => {
    try {
      const res = await fetch("/booksData.json");
      if (!res.ok) throw new Error(`Failed to fetch books: ${res.status}`);
      const data = await res.json();

      // Shuffle once when fetched
      const shuffled = [...data.books].sort(() => 0.5 - Math.random());
      setBooks(shuffled);
    } catch (err) {
      setError("Failed to load books");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return { books, loading, error, refetch: fetchBooks };
};

export default useBook;
