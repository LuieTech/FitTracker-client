import { useEffect, useState } from "react";
import { getAllExercises } from "../../services/api.service";
import { getClientsByTrainerId } from "../../services/backend-service/client.service";
import { addExercise } from "../../services/backend-service/exercise.service";
import "./ExercisesList.css";
import { useTrainerContext } from "../../context/trainer.context";
import ExerciseBox from "../ExerciseBox";

function ExercisesList() {
  const [exercisesList, setExercisesList] = useState([]);
  // const [clientsList, setClientsList] = useState([]);
  const {clientsList} = useTrainerContext();

  useEffect(() => {
    getAllExercises()
      .then((res) => {
        setExercisesList(res);
      })
      .catch((error) => console.log(error));
  }, []);

  const saveExerciseToBackend = async (exercise) => {
    const modifiedExercise = {
      name: exercise.name,
      instructions: exercise.instructions,
      bodyPart: exercise.bodyPart,
      client: { id: 2 },
    };

    addExercise(modifiedExercise);
  };

  const allExercises = exercisesList.map((x) => (
    <ExerciseBox key={x.id} {...x} />
  ));

  return (
    <div className="content">{allExercises}</div>
  );

}

export default ExercisesList;
