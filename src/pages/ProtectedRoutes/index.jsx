import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export const ProtectedRoutes = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};
