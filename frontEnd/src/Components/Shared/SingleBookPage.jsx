import useAddToCart from "../../Data/useAddToCart";

const BookCard = ({ book }) => {
  const { addToCart } = useAddToCart();

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-4">
      
      <NavLink to={`/book/${book.bookId}`}>
        <img src={book.cover} className="w-full h-52 object-cover rounded-lg mb-4" />
      </NavLink>

      <h3 className="font-bold">{book.bookName}</h3>
      <p>{book.authorId}</p>
      <p>${book.price}</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          addToCart(book);   // ✅ Now it stores globally
        }}
        className="mt-3 w-full border py-2"
      >
        Add to Cart
      </button>
    </div>
  );
};
export default BookCard;