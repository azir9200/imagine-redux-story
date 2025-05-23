import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/layouts/Dashboard";
import ProtectedRoute from "../components/layouts/ProtectedRoute";
import AddProduct from "../Dashboarditems/AddProduct";
import EditProduct from "../Dashboarditems/EditProduce";
import UserInfo from "../Dashboarditems/UserInfo";
import About from "../pages/about/About";
import Cart from "../pages/carts/Cart";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";
import ContactPage from "../pages/contact/Contact";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PaymentFailed from "../pages/payments/PaymentFailed";
import PaymentSuccess from "../pages/payments/PaymentSuccess";
import ProductPage from "../pages/product/ProductPage";
import Login from "../pages/users/Login";
import Register from "../pages/users/Register";
import Home from "../pages/Home";
import Gallery from "../components/shareHome/Gallery";
import Order from "../pages/Order/Order";
import ManageOrder from "../pages/Order/DashBoardOrder";
import Profile from "../Dashboarditems/Profile";

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
        path: "/product-page",
        element: <ProductPage />,
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
        path: "/about",
        element: <About />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  //dashboard routes
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "user",
        element: <UserInfo></UserInfo>,
      },
      {
        path: "addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "editProduct",
        element: <EditProduct></EditProduct>,
      },
      {
        path: "allOrder",
        element: <ManageOrder></ManageOrder>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
