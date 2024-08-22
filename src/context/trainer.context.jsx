import { createContext, useContext, useEffect, useState } from "react";
import { getClientsByTrainerId } from "../services/backend-service/client.service";
// import user from "../data/user.json"

const TrainerContext = createContext();

function TrainerProviderWrapper({ children }) {

  const [trainer, setTrainer] = useState({})
  const [trainerId, setTrainerId] = useState(null)
  
  

  const getClients = async (trainerId) => {
    if(trainer){
      try {
        const response = await getClientsByTrainerId(trainerId)    
        //console.log(response);  
        return response
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("No trainer id");
    }
  }

  const logout = () => {
    setTrainer({})
    setTrainerId(null)
  };
  

  const value = {
    trainer,
    setTrainer,
    setTrainerId,
    trainerId,
    getClients,
    logout

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