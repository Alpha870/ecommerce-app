import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Orders from "./components/Orders/Orders";
import About from "./components/About/About";
import Checkout from "./components/Checkout/Checkout";
import Products from "./components/Products/Products";
import CreateProduct from "./components/Admin/CreateProduct";



const router = createBrowserRouter([
  {
    path: "/admin/create/product",
    element: <CreateProduct />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/orders",
    element: <Orders />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
