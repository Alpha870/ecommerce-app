import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRouter = () => {
  const { isLogged } = useAuth();

  return <>{isLogged() ? <Navigate to="/" /> : <Outlet />}</>;
};

export default PublicRouter;
