import { NavLink } from "react-router-dom";
import useAddToCart from "../../../Data/useAddToCart";

const BookCard = ({ book }) => {
  const { addToCart } = useAddToCart();

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg">

      <NavLink to={`/book/${book.bookId}`}>
        <img src={book.cover} className="h-52 w-full object-cover rounded-lg" />
      </NavLink>

      <h3 className="font-bold mt-2">{book.bookName}</h3>
      <p className="text-sm text-gray-500">{book.authorId}</p>
      <p className="text-blue-600 font-semibold">${book.price}</p>

      <button
        onClick={() => addToCart(book)}
        className="w-full mt-3 border py-2 rounded hover:bg-blue-600 hover:text-white"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default BookCard;
