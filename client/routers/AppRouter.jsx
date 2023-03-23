import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AdminProductPage from "./Admin/AdminProductPage";
import HomePage from "./HomePage/HomePage";
import LoginPage from "./LoginPage/LoginPage";
import AboutPage from "./AboutPage/AboutPage";
import ProductsPage from "./ProductsPage/ProductsPage";
import ProductPage from "./ProductPage/ProductPage";
import ProfilePage from "./ProfilePage/ProfilePage";
import CheckoutPage from "./CheckoutPage/CheckoutPage";
import OrdersPage from "./OrdersPage/OrdersPage";

const router = createBrowserRouter([
  {
    path: "/admin/create/product",
    element: <AdminProductPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:idProduct",
    element: <ProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/checkout",
    element: <CheckoutPage />,
  },
  {
    path: "/orders",
    element: <OrdersPage />,
  },
]);

const AppRouter = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default AppRouter;
