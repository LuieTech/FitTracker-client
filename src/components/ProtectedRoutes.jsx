import { Navigate } from "react-router-dom";
import { useTrainerContext } from "../context/trainer.context";
import { useEffect, useState } from "react";

function ProtectedRoute({ children }) {
  const { trainer, loadTrainerFromLocalStorage } = useTrainerContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTrainer = async () => {
      await loadTrainerFromLocalStorage();
      setLoading(false);
    };
    
    loadTrainer();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!trainer?.id) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
