import { Navigate } from "react-router-dom";
import { useTrainerContext } from "../context/trainer.context";

function ProtectedRoute({ children }) {
  const { trainer } = useTrainerContext();
  
  if (!trainer?.id) {
    // If no trainer is logged in, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If the user is logged in, render the children (protected content)
  return children;
}

export default ProtectedRoute;
