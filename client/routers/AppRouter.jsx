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
import NotFoundPage from "./NotFoundPage/NotFoundPage";
import PrivateRouter from "./PrivateRouter";
import AdminRouter from "./AdminRouter";
import PublicRouter from "./PublicRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
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
  //rutas publicas
  {
    element: <PublicRouter />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },

  // rutas privadas
  {
    element: <PrivateRouter />,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/checkout/:id",
        element: <CheckoutPage />,
      },
      {
        path: "/orders",
        element: <OrdersPage />,
      },
    ],
  },

  // rutas administrador
  {
    element: <AdminRouter />,
    children: [
      {
        path: "/admin/create/product",
        element: <AdminProductPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
