import { createContext, useContext, useEffect, useState } from "react";
import {refreshTrainerData } from "../services/backend-service/trainer.service";
import { getClientsByTrainerId } from "../services/backend-service/client.service";

const TrainerContext = createContext();

function TrainerProviderWrapper({ children }) {
  const [trainer, setTrainer] = useState({});
  const [trainerId, setTrainerId] = useState(null);

  const loadTrainerFromLocalStorage = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const trainerData = await refreshTrainerData();
        setTrainer(trainerData);
        setTrainerId(trainerData.id);
      } catch (error) {
        console.log("Error while refreshing trainer from context", error);
        logout();
      }
    }
  };

  const getClients = async (trainerId) => {
    if (trainer) {
      try {
        const response = await getClientsByTrainerId(trainerId);
        return response;
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No trainer id");
    }
  };

  const logout = () => {
    setTrainer({});
    setTrainerId(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  };

  useEffect(() => {
    loadTrainerFromLocalStorage();
  }, []);

  const value = {
    trainer,
    setTrainer,
    setTrainerId,
    trainerId,
    getClients,
    logout,
    loadTrainerFromLocalStorage,
  };

  return (
    <TrainerContext.Provider value={value}>
      {children}
    </TrainerContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTrainerContext() {
  return useContext(TrainerContext);
}

export default TrainerProviderWrapper;
