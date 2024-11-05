import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Details from "../pages/Details";
import New from "../pages/New";
import Dashboard from "../pages/Dashboard";
import Products from "../components/Products/Products";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <p>Error</p>,
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
      },
      {
        path: "/details",
        element: <Details></Details>,
      },
      {
        path: "/new",
        element: <New></New>,
      },
    ],
  },
]);

export default routes;
