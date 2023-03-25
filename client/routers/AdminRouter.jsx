import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const AdminRouter = () => {
  const [admin, setAdmin] = useState(true);

  return <>{admin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default AdminRouter;
