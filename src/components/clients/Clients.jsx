import React, { useEffect, useState } from 'react'
import { getClientById, getClientsByTrainerId } from '../../services/backend-service/client.service'
import { useTrainerContext } from '../../context/trainer.context'

function Clients() {

  const [client, setClient] = useState(null)
  const {clientId, clientsList} = useTrainerContext()

  useEffect(() => {
    getClientById(clientId)
      .then((res) => setClient(res))
      .catch((err) => console.log(err))
  }, [clientId])

  const clients = clientsList.map((cl) => (
    <div key={cl.id}
      className='card m-3 p-3'
      style={{ width: "220px", heigth: "auto" }}
    >
      <h5 className='card-title'>{cl.clientInfo.name}</h5>
      <p>Ph: {cl.clientInfo.phoneNumber}</p>
      <p>E-mail: {cl.clientInfo.email}</p>
      
    </div>
  ))

  return (
    <div>
      {client ? 
        <h1>{client.clientInfo.name}</h1> :  
        <div>{clients}</div>  
      }
    </div>
  )
}

export default Clients