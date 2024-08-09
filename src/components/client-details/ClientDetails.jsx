import "./ClientDetails.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteClientById,
  getClientById,
} from "../../services/backend-service/client.service";
import ClientCard from "../ClientCard";
import {
  deleteExerciseById,
  getExerciseByClientId,
} from "../../services/backend-service/exercise.service";
import ExerciseCard from "../ExerciseCard";

function ClientDetails() {
  const { clientId } = useParams();
  const [client, setClient] = useState(null);
  const [exerciseList, setExerciseList] = useState([]);
  const [showList, setShowList] = useState(false);
  const navigate = useNavigate();

  const getClient = async (id) => {
    const response = await getClientById(id);
    setClient(response);
  };

  const getExercises = async (id) => {
    const response = await getExerciseByClientId(id);
    setExerciseList(response);
  };

  const deleteClient = async (id) => {
    const response = await deleteClientById(id);
    navigate("/clients");
  };

  const deleteExercise = async (id) => {
    const response = await deleteExerciseById(id);
    console.log(response);
    getClient(clientId);
    exerciseList && getExercises(clientId);
  };

  const randomNum = () => {
    let randomNumber = Math.floor(Math.random() * 50) + 300;
    return randomNumber;
  };



  useEffect(() => {
    getClient(clientId);
    exerciseList && getExercises(clientId);
    randomNum();
  }, [clientId]);

  const list = exerciseList.map((exercise) => (
    <ExerciseCard
      key={exercise.id}
      {...exercise}
      handleOnDelete={() => deleteExercise(exercise.id)}
    />
  ));

  const handleShowListButton = () => {
    setShowList((prev) => !prev);
  };

  return (
    <div>
      <ClientCard
        {...client}
        handleOnClick={handleShowListButton}
        showList={showList}
        handleOnDelete={() => deleteClient(client.id)}
        random={randomNum}
        reloadClient={getClient}
      />
      {exerciseList.length ? (
        <>
          <div className="exercise-card">{showList && list}</div>
        </>
      ) : (
        showList && <h1 className="text-muted">No exercise added yet</h1>
      )}
    </div>
  );
}

export default ClientDetails;
