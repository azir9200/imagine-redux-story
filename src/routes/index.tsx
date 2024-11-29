import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Cart from "../pages/carts/Cart";
import About from "../pages/about/About";
import Products from "../components/Products";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import PaymentFailed from "../pages/payments/PaymentFailed";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PaymentSuccess from "../pages/payments/PaymentSuccess";
import ContactPage from "../pages/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/cart",
        element: (
          <ProtectedRoute>
            {" "}
            <Cart />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "payment/failed",
        element: <PaymentFailed></PaymentFailed>,
      },
      {
        path: "payment/success",
        element: <PaymentSuccess />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
