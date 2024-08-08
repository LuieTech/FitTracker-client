import { useEffect, useState } from "react";
import { createClient } from "../../services/backend-service/client.service";
import { useTrainerContext } from "../../context/trainer.context";
import "./Clients.css";
import CreateClient from "../forms/CreateClient";
import { Link } from "react-router-dom";

function Clients() {
  const [clientsList, setClientsList] = useState([]);
  const { trainer, trainerId, getClients } = useTrainerContext();

  const obtainClients = async (id) => {
    const response = await getClients(id);
    setClientsList(response);
  };

  useEffect(() => {
    trainerId && obtainClients(trainerId);
  }, [trainer]);

  const clients = clientsList.map((cl) => (
    <Link to={`/client-details/${cl.id}`} key={cl.id}>
      <div  className="card">
        <h5 className="card-title">{cl.name}</h5>
        <p>Ph: {cl.phoneNumber}</p>
        <p>Email: {cl.email}</p>
      </div>
    </Link>
  
  ));

  function handleCreate(data) {
    createClient(data)
      .then(() => obtainClients(trainer?.id))
      .catch((error) => console.log(error));
  }

  return (
    <section className="main">
      <div>
        <CreateClient onCreate={handleCreate} />
      </div>

      <div className="clients-container">
        <>{clients}</>
      </div>
    </section>
  );
}

export default Clients;
