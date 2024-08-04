import { createContext, useContext, useEffect, useState } from "react";
import { getTrainer } from "../services/backend-service/trainer.service";
import { getClientsByTrainerId } from "../services/backend-service/client.service";

const TrainerContext = createContext();

function TrainerProviderWrapper({ children }) {

  const [user, setUser] = useState(null)
  const [clientsList, setClientsList] = useState([])
  const [clientId, setClientId] = useState()

  useEffect(() => {
    getTrainer(1).then((trainer) => {
      setUser(trainer)
      return getClientsByTrainerId(trainer.id)
    })
    .then((clts) => setClientsList(clts))
    .catch((error) => console.log(error))
  }, [])

  // console.log( "clients from trainer context",clientsList);

  const value = {
    user,
    clientsList,
    setClientId,
    clientId
  }

  //console.log(user?.name)

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