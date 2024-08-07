import { createContext, useContext, useEffect, useState } from "react";
import { fetchTrainer } from "../services/backend-service/trainer.service";
import { getClientsByTrainerId } from "../services/backend-service/client.service";

const TrainerContext = createContext();

function TrainerProviderWrapper({ children }) {

  const [trainer, setTrainer] = useState({})
  const [trainerId, setTrainerId] = useState(null)

  const getTrainer = async () => {
    const response = await fetchTrainer(1)
    setTrainer(response)
    setTrainerId(response.id)
  }

  const getClients = async (trainerId) => {
    if(trainer){
      try {
        const response = await getClientsByTrainerId(trainerId)
        return response
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No trainer id");
    }
    
  }

  useEffect(()=> {
    getTrainer()
  }, [])

  const value = {
    trainer,
    trainerId,
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