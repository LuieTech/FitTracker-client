import React, { useEffect, useState } from "react";
import { getAllExercises } from "../../services/api.service";
import { getClientsByTrainerId } from "../../services/backend-service/client.service";
import { addExercise } from "../../services/backend-service/exercise.service";

function ExercisesList() {
  const [exercisesList, setExercisesList] = useState([]);
  const [clientsList, setClientsList] = useState([])

  const getExercises = async () => {
    const response = await getAllExercises();
    console.log(response);
    setExercisesList(response);
  };


  useEffect(() => {
    getExercises();
    getClientsByTrainerId(1)
      .then(res => {
        console.log(res);
        setClientsList(res)
      })

  }, []);

  const saveExerciseToBackend = async (exercise) => {
    const modifiedExercise = {
      name: exercise.name,
      instructions: exercise.instructions,
      bodyPart: exercise.bodyPart,
      client: { id: 2 }
    };

    addExercise(modifiedExercise)
      
  };

  const exercises = exercisesList.map((exercise) => (
    <>
      <li key={exercise.id}>{exercise.name}</li>
      <h4>{exercise.bodyPart}</h4>
      <img src={exercise.gifUrl} alt="" />
      
      <button className="btn btn-primary" onClick={() => saveExerciseToBackend(exercise)}>Add Exercise to Clients list</button>
    </>
  ));

  const clients = clientsList.map((client) => (
    <li value={client.id} key={client._id}>{client.clientInfo.name}</li>
  ))

  return (
    <div className="d-flex gap-5">
      <div>
        <ul> {exercises} </ul>
      </div>
      <div>
        <ul>{clients}</ul>
      </div>
    
    </div>
    
  );
}

export default ExercisesList;
