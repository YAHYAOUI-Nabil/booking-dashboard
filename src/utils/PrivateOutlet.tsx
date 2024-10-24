import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../app/hooks/useAuth";

const PrivateOutlet = () => {
  const auth = useAuth();
  const location = useLocation();

  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateOutlet;
