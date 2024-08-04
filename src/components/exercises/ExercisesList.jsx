import { useEffect, useState } from "react";
import { getAllExercises } from "../../services/api.service";
import { getClientsByTrainerId } from "../../services/backend-service/client.service";
import { addExercise } from "../../services/backend-service/exercise.service";
import "./ExercisesList.css";

function ExercisesList() {
  const [exercisesList, setExercisesList] = useState([]);
  const [clientsList, setClientsList] = useState([]);

  useEffect(() => {
    getAllExercises()
      .then((res) => {
        setExercisesList(res);
      })
      .catch((error) => console.log(error));
    getClientsByTrainerId(1)
      .then((res) => setClientsList(res))
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

  const exercises = exercisesList.map((x) => (
    <div
      key={x.id}
      className="card m-3"
      style={{ width: "220px", heigth: "auto" }}
    >
      <img
        src={x.gifUrl}
        alt="image"
        style={{ maxWidth: "150px", heigth: "auto" }}
        className="card-img-top"
      />
      <div className="d-flex flex-column card-body">
        <h5>{x.name}</h5>
        <p>
          Body Part: <strong>{x.bodyPart}</strong>
        </p>
        <p>
          Target Muscles: <strong>{x.target}</strong>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="content">{exercises}</div>
  );

}

export default ExercisesList;
