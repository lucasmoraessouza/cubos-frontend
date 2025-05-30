import { Navigate, Outlet } from "react-router";

export function PrivateRoute() {
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
}
