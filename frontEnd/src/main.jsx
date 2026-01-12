import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Route/Root";

import AboutUs from "./Pages/About Us/aboutUs";
import Home from "./Pages/Home/Home";
import ContactUs from "./Pages/Contact Us/ContactUs";
import Blog from "./Pages/Blog/Blog";
import AllBooks from "./Pages/All Books/AllBooks";
import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/SignUp/SignUp";
import UserDash from "./DashBoard/UserDashboard/UserDash";
import UserWishList from "./DashBoard/UserDashboard/Pages/UserWishList";
import UserBookList from "./DashBoard/UserDashboard/Pages/UserBookList";
import SingleBookPage from "./Components/Shared/SingleBookPage";
import ApplyAsaAuthor from "./DashBoard/UserDashboard/Pages/ApplyAsaAuthor";
import Cart, { CartProvider } from "./Components/NavBar/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/blog", element: <Blog /> },
      { path: "/allBooks", element: <AllBooks /> },
      { path: "/logIn", element: <LogIn /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/cart", element: <Cart /> },

     
      { path: "/book/:id", element: <SingleBookPage /> }
    ]
  },

  {
    path: "/userDash",
    element: <UserDash />,
    children: [
      { path: "/userDash", element: <UserWishList /> },
      { path: "/userDash/userBookList", element: <UserBookList /> },
      { path: "/userDash/applyAsaAthor", element: <ApplyAsaAuthor /> },
    ]
  }
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
