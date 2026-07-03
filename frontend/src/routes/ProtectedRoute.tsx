import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { userLoggedIn, loading } = useAuth();

  if (loading) return null;

  if (!userLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}