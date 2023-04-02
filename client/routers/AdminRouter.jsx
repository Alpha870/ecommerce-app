import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../auth/useAuth";

const AdminRouter = () => {
  const {admin} = useAuth()
  return <>{admin ? <Outlet /> : <Navigate to="/" />}</>;
};

export default AdminRouter;
