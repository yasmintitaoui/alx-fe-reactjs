import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const user = useAuth();

  if (!user.loggedIn) {
    return <Navigate to="/" replace />; // Redirect to home if not logged in
  }

  return children; // Render the protected component
}
