import { AuthContext } from "@/AuthProvider/AuthProvider";
import useCheckAdmin from "@/Shared/useCheckAdmin";
import { useContext, useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Navigate } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const { user, loading: authLoading, logout } = useContext(AuthContext);
  const [isAdmin, adminLoading] = useCheckAdmin();

  useEffect(() => {
    if (user && !adminLoading && !isAdmin) {
      logout(); // safe logout after admin check complete
    }
  }, [user, isAdmin, adminLoading, logout]);

  if (authLoading || adminLoading) {
    return <LoadingScreen />;
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/signup" replace />;
};

export default PrivetRoute;
