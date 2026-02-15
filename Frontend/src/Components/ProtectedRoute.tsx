import { Navigate } from "react-router-dom";
import { isAuth } from "../utils/auth";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuth() ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
