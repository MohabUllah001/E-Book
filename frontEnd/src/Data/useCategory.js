import { useEffect, useState } from "react";

const useCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
      const res = await fetch("/categoriesData.json");
      if (!res.ok) throw new Error(`Failed to fetch categories: ${res.status}`);

      const data = await res.json();

      // Shuffle once after fetching
      const shuffled = [...data.categories].sort(() => 0.5 - Math.random());
      setCategories(shuffled);
    } catch (err) {
      setError("Failed to load categories");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return { categories, loading, error, refetch: fetchCategories };
};

export default useCategory;
