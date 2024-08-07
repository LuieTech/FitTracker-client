import { createContext, useContext, useEffect, useState } from "react";
import { fetchTrainer } from "../services/backend-service/trainer.service";
import { getClientsByTrainerId } from "../services/backend-service/client.service";

const TrainerContext = createContext();

function TrainerProviderWrapper({ children }) {

  const [trainer, setTrainer] = useState({})

  const getTrainer = async () => {
    const response = await fetchTrainer(1)
    setTrainer(response)
  }

  const getClients = async (trainerId) => {
    const response = await getClientsByTrainerId(trainerId)
    return response
  }

  useEffect(()=> {
    getTrainer();
  }, [])

  const value = {
    trainer,
    getClients,
    getTrainer,

  }

  return (
    <TrainerContext.Provider value={value}>
      {children}
    </TrainerContext.Provider>
  )
}

 // eslint-disable-next-line react-refresh/only-export-components
 export function useTrainerContext(){
  return useContext(TrainerContext)
}

export default TrainerProviderWrapper;