import { useLocation } from "react-router-dom";
import { useTrainerContext } from "../../context/trainer.context";
import "./Navbar.css";

import { useEffect, useState } from "react";

function Navbar() {
  const { trainer, getClients } = useTrainerContext();
  const location = useLocation();

  function onClientChange(value) {
    console.log(value);
  }

  useEffect(() => {
    
  }, []);

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
            {client?.name}
          </option>
        ))}
      </select>}
    </nav>
  );
}

export default Navbar;
