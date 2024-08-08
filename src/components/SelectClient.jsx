import { useEffect, useState } from "react";
import { useTrainerContext } from "../context/trainer.context";

function SelectClient({ onSelect }) {

  const [clientsList, setClientsList] = useState([]);
  const { trainer, getClients } = useTrainerContext();

  const obtainClients = async (id) => {
    if (trainer) {
      try {
        const response = await getClients(id);
        setClientsList(response);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (trainer?.id) {
      obtainClients(trainer.id);
    }
  }, [trainer]);
  

  const handleSelect = (event) => {
    const {value} = event.target
    onSelect(value)
  };

  return (
    <div className="pb-2">
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSelect}
      >
        <option>Client</option>
        {clientsList.map((client) => (
          <option
            key={client.id}
            className="option"
            value={client.id}
            id="client"
          >
            {client?.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectClient;
