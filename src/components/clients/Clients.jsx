import { useEffect, useState } from "react";
import { getClientById } from "../../services/backend-service/client.service";
import { useTrainerContext } from "../../context/trainer.context";
import "./Clients.css";
import { useNavigate } from "react-router-dom";

function Clients() {
  const [client, setClient] = useState(null);
  const { clientId, clientsList } = useTrainerContext();
  const navigate = useNavigate();

  useEffect(() => {
    clientId &&
      getClientById(clientId)
        .then((res) => setClient(res))
        .catch((err) => console.log(err));
  }, [clientId]);

  const handleAddClient = () => {
    navigate("/add-client"); // Navigate to the add client form route
  };

  const clients = clientsList.map((cl) => (
    <div
      key={cl.id}
      className="card m-3 p-3"
      style={{ width: "220px", heigth: "auto" }}
    >
      <h5 className="card-title">{cl.clientInfo.name}</h5>
      <p>Ph: {cl.clientInfo.phoneNumber}</p>
      <p>E-mail: {cl.clientInfo.email}</p>
    </div>
  ));

  return (
    <div>
      <button onClick={handleAddClient} className="add-client-btn">Add Client</button>
      {client ? (
        <div className="trainer-profile">
          <div className="profile-details">
            <p><strong>Name:</strong> {client.clientInfo.name}</p>
            <p><strong>Username:</strong> {client.username}</p>
            <p><strong>Email:</strong> {client.clientInfo.email}</p>
            <p><strong>Phone Number:</strong> {client.clientInfo.phoneNumber}</p>
          </div>
        </div>
      ) : (
        <div>{clients}</div>
      )}
    </div>
  );
}

export default Clients;
