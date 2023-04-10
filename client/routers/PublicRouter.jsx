import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PublicRouter = () => {
  const { user } = useAuth();

  return <>{!user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default PublicRouter;
