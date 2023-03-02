import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Producto from "./components/Producto/Producto";
import Profile from "./components/Perfil/Profile";
import Carrito from "./components/Carrito/Carrito";
import Orders from "./components/Pedidos/Orders";
import Crear from "./components/Crear/Crear";

const router = createBrowserRouter([
  {
    path: "/admin/create/product",
    element: <Crear />,
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
    path: "/productos",
    element: <Producto />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/checkout",
    element: <Carrito />,
  },
  {
    path: "/pedidos",
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
