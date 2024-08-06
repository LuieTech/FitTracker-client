import { useEffect, useState } from "react";
import { getAllExercises } from "../../services/api.service";
import { getClientsByTrainerId } from "../../services/backend-service/client.service";
import { addExercise } from "../../services/backend-service/exercise.service";
import "./ExercisesList.css";
import { useTrainerContext } from "../../context/trainer.context";
import ExerciseBox from "../ExerciseBox";

function ExercisesList() {
  const [exercisesList, setExercisesList] = useState([]);
  const { clientsList } = useTrainerContext();

  const storedExercises = localStorage.getItem("");

  useEffect(() => {
    const storedExercises = localStorage.getItem("");
    if (storedExercises) {
      setExercisesList(JSON.parse(storedExercises));
    } else {
      getAllExercises()
        .then((exercises) => {
          setExercisesList(exercises);
          localStorage.setItem("exercises", JSON.stringify(exercises));
        })
        .catch((error) => console.error("Error fetching exercises:", error));
    }
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

  return <div className="content">{allExercises}</div>;
}

export default ExercisesList;
