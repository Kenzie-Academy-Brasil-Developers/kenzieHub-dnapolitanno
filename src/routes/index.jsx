import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/404/style";
import { Dashboard } from "../pages/Dashbord";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";

export const AppRoutes = () => {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Login user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          <Dashboard
            user={user}
            setUser={setUser}
          />
        }
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};
