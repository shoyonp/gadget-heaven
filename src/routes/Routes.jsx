import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Details from "../pages/Details";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products/Products";
import Cart from "../pages/Cart";
import Wishlist from "../pages/Wishlist";
import Faq from "../pages/Faq";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <p className="text-6xl font-bold text-center">404</p>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../../public/categories.json"),
        children: [
          {
            path: "/",
            element: <Products></Products>,
            loader: () => fetch("../../public/products.json"),
          },
          {
            path: "/category/:category",
            element: <Products></Products>,
            loader: () => fetch("../../public/products.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "cart",
            element: <Cart></Cart>,
            loader: () => fetch("../../public/products.json"),
          },
          {
            path: "/dashboard",
            element: <Cart></Cart>,
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>,
          },
        ],
      },
      {
        path: "/products/:product_id",
        element: <Details></Details>,
        loader: () => fetch("../../public/products.json"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);

export default routes;
