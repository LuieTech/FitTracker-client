import { useEffect, useState } from "react";
import { createClient, getClientById, getClientsByTrainerId } from "../../services/backend-service/client.service";
import { useTrainerContext } from "../../context/trainer.context";
import "./Clients.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CreateClient from "../forms/CreateClient";

function Clients({id}) {
  const [clientsList, setClientsList] = useState([]);
  const { trainer, getClients } = useTrainerContext();

  const obtainClients = async (id) => {
    const response = await getClients(id);
    setClientsList(response)
  }

  useEffect(() => {
      obtainClients(trainer?.id)
  }, [trainer]);

  const clients = clientsList.map(cl => (
    <div key={cl.id} className="card">
      <h5 className="card-title">{cl.name}</h5>
      <p>Ph: {cl.phoneNumber}</p>
      <p>E-mail: {cl.email}</p>
    </div>
  ));

  function handleCreate(data) {
   
  createClient(data)
    .then(() => obtainClients(trainer?.id))
    .catch((error) => console.log(error))

  }  

  return (
    <section className="main">
      <div>
        <CreateClient onCreate={handleCreate}/>
      </div>
      
      <div className="clients-container">
          <>{clients}</>

      </div>
    </section>
  );
}

export default Clients;
