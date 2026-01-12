import { useEffect, useState } from "react";

const useAuthor = () => {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAuthors = async () => {
    try {
      const res = await fetch("/authorsData.json");
      if (!res.ok) throw new Error(`Failed to fetch authors: ${res.status}`);

      const data = await res.json();

      // Shuffle once after fetching
      const shuffled = [...data.authors].sort(() => 0.5 - Math.random());
      setAuthors(shuffled);
    } catch (err) {
      setError("Failed to load authors");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  return { authors, loading, error, refetch: fetchAuthors };
};

export default useAuthor;
