import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Dashboard } from "../pages/Dashbord";
import { Pagerror } from "../pages/PegeError";
import { ProtectedRoutes } from '../pages/ProtectedRoutes';


export const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<ProtectedRoutes />}> */}
        <Route index element={<Login />} />
      {/* </Route> */}
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Pagerror />} />
    </Routes>
  );
};
