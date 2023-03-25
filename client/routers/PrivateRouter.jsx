import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const PrivateRouter = () => {
  const {isLogged} = useAuth()

  return <>{isLogged() ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRouter;
