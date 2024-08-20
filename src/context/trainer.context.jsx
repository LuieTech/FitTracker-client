import { createContext, useContext, useEffect, useState } from "react";
import { getClientsByTrainerId } from "../services/backend-service/client.service";
// import user from "../data/user.json"

const TrainerContext = createContext();

function TrainerProviderWrapper({ children }) {

  const [trainer, setTrainer] = useState({})
  const [trainerId, setTrainerId] = useState(null)

  const loadTrainer = async () => {
    const token = localStorage.getItem('authToken');
    if (token && trainerId) {
      try {
        const trainerData = await fetchTrainer(trainerId);
        setTrainer(trainerData);
        setTrainerId(trainerData.id);
      } catch (error) {
        console.log("Failed to load trainer: ", error);
      }
    }
  };
  
  

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

  useEffect(() => {
    const storedTrainerId = localStorage.getItem('trainerId');
    if (storedTrainerId) {
      setTrainerId(storedTrainerId);
      loadTrainer();
    }
  }, []);
  

  const value = {
    trainer,
    setTrainer,
    setTrainerId,
    trainerId,
    getClients,

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