import { useEffect, useState } from "react";
import { createClient, getClientById } from "../../services/backend-service/client.service";
import { useTrainerContext } from "../../context/trainer.context";
import "./Clients.css";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import CreateClient from "../forms/CreateClient";

function Clients() {
  const [client, setClient] = useState(null);
  const { clientId, clientsList, setClientsList } = useTrainerContext();
  const [list, setList] = useState(clientsList)
  const navigate = useNavigate()

  useEffect(() => {
    setList(clientsList)
    clientId && getClientById(clientId)
      .then(res => setClient(res))
      .catch(err => console.log(err));
  }, [clientId, clientsList]);

  const clients = list.map(cl => (
    <div key={cl.id} className="card">
      <h5 className="card-title">{cl.name}</h5>
      <p>Ph: {cl.phoneNumber}</p>
      <p>E-mail: {cl.email}</p>
    </div>
  ));

  const handleCreate = (data) => {
    createClient(data)
      .then((newClient) => {
        // Suponiendo que newClient es el cliente recién creado devuelto por el servidor
        const updatedClients = [...clientsList, newClient];
        setClientsList(updatedClients); // Actualiza el estado en el contexto
        navigate("/clients"); // Navega sin recargar
      })
      .catch((error) => console.log("error creating client in form", error))
  }
  

  return (
    <section className="main">
      <div className="create-form">
        {!client && <CreateClient onCreate={handleCreate}/>}
      </div>
      
      <div className="clients-container">
        {client ? (
          <div className="client-profile">
            <div className="profile-details">
              <p><strong>Name:</strong> {client.name}</p>
              <p><strong>Email:</strong> {client.email}</p>
              <p><strong>Phone Number:</strong> {client.phoneNumber}</p>
            </div>
          </div>
        ) : (
          <>{clients}</>
        )}
      </div>
    </section>
  );
}

export default Clients;
