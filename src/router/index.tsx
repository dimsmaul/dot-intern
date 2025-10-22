import { Navigate, useRoutes } from "react-router-dom";
import { AuthRoute } from "./auth";
import { useAuthStore } from "@/store/useAuthStore";
import { UnauthRoute } from "./unauth";

export const Router = () => {
  const { token } = useAuthStore();
  const routes = token ? AuthRoute : UnauthRoute;

  return useRoutes([
    ...routes,
    { path: "*", element: <Navigate to={token ? "/quiz" : "/"} replace /> },
  ]);
};
