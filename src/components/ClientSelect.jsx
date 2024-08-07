import { useEffect, useState } from "react";
import { useTrainerContext } from "../context/trainer.context";

function ClientSelect({onSelect}) {
  const [clientsList, setClientsList] = useState([]);
  const { trainer, getClients } = useTrainerContext();

  const obtainClients = async (id) => {
    const response = await getClients(id);
    setClientsList(response);
  };

  useEffect(() => {
    obtainClients(trainer.id);
  }, [trainer]);

  function handleSelect(event){
    const {value} = event.target
    console.log(value)
    onSelect(value)

  }

  return (
    <div className="">
      <select
        className="form-select" aria-label="Default select example"
        onChange={handleSelect}
      >
      <option >Select Client</option>
      {clientsList.map((client) => (
        <option key={client.id} className="option" value={client.id} id="client">
          {client?.name}
        </option>
        
      ))}</select>
    </div>
  );
}

export default ClientSelect;
