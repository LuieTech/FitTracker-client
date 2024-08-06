import { useEffect, useState } from "react";
import { getAllExercises } from "../../services/api.service";
import { getClientsByTrainerId } from "../../services/backend-service/client.service";
import { addExercise } from "../../services/backend-service/exercise.service";
import "./ExercisesList.css";
import { useTrainerContext } from "../../context/trainer.context";
import ExerciseBox from "../ExerciseBox";
import ClientSelect from "../ClientSelect";

function ExercisesList() {
  const [exercisesList, setExercisesList] = useState([]);
  const { clientsList } = useTrainerContext();

  useEffect(() => {
    const storedExercises = localStorage.getItem("exercises");
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
      client: { id: handleClientId() },
    };

    saveExerciseToBackend(modifiedExercise);
  };

  const handleClientId = (value) => {
    console.log(value);
    return value;
  }

  const handleExercise = (id) => {
    console.log(id);
  }

  const allExercises = exercisesList.map((x) => (
    <ExerciseBox key={x.id} {...x} onSelect={handleExercise}/>
  ));

  return (
    <div>
      <div className="select">
        <ClientSelect onSelect={handleClientId}/>
      </div>
      <div className="content">{allExercises}</div>
    </div>
      
  )
}

export default ExercisesList;
