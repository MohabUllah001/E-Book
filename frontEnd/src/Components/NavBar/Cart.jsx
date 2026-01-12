import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Load cart from localStorage
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem("ebook_cart");
    return stored ? JSON.parse(stored) : [];
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("ebook_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (book) => {
    setCart((prev) => [...prev, book]);
  };

  const removeFromCart = (bookId) => {
    setCart((prev) => prev.filter((b) => b.bookId !== bookId));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("ebook_cart");
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const Cart = () => {
  return useContext(CartContext);
};

export default Cart;