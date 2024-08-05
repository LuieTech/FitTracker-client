import { useLocation } from "react-router-dom";
import { useTrainerContext } from "../../context/trainer.context";
import "./Navbar.css";

import { useEffect, useState } from "react";

function Navbar() {
  const { clientsList, setClientId } = useTrainerContext();
  const location = useLocation();
  // const [clients, setClients] = useState([]);

  // const getClients = async (trainerId) => {
  //   const response = await getClientsByTrainerId(trainerId);
  //   setClients(response);
  //   console.log(response);
  // };

  function onClientChange(value) {
    setClientId(value);
  }

  useEffect(() => {}, [clientsList]);

  return (
    <nav>
      { (location.pathname === "/clients") && <select
        style={{
          width: "170px",
          borderColor: "gray",
          borderRadius: "10px",
          padding: "7px",
        }}
        onChange={(e) => onClientChange(e.target.value)}
      >
        {clientsList.map((client) => (
          <option key={client.id} value={client.id}>
            {client.clientInfo.name}
          </option>
        ))}
      </select>}
    </nav>
  );
}

export default Navbar;
