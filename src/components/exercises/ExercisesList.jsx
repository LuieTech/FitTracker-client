import { useEffect, useState } from "react";
import { getAllExercises } from "../../services/api.service";
import { addExercise } from "../../services/backend-service/exercise.service";
import "./ExercisesList.css";
import ExerciseBox from "../ExerciseBox";
import SelectClient from "../SelectClient";
function ExercisesList() {

  const [exercisesList, setExercisesList] = useState([]);
  const [clientId, setClientId] = useState(null);

  const getExercises = async () => {
    const storedExercises = localStorage.getItem("exercises");
    if (storedExercises) {
      setExercisesList(JSON.parse(storedExercises));
    } else {
      try {
        const response = await getAllExercises();
        setExercisesList(response);
        localStorage.setItem("exercises", JSON.stringify(response));
      } catch (error) {
        console.error("Error fetching exercises:", error);
      }
    }
  };

  useEffect(() => {
    getExercises();
  }, []);


  const saveExerciseToBackend = ( exercise ) => {

    console.log("Selected Client ID: ", clientId); 
    console.log("Exercise details: ", exercise);

    if(clientId && exercise){
      try {
        const modifiedExercise = {
          gifUrl: exercise.gifUrl,
          name: exercise.name,
          instructions: exercise.instructions,
          bodyPart: exercise.bodyPart,
          client: { id: clientId }
        };
        addExercise(modifiedExercise);
      } catch (error) {
        console.log("error from saveExerciseToBackend function: ", error);
      }
    }


  };

  const allExercises = exercisesList.map((x) => (
    <div key={x.id} className="box-btn">
      <SelectClient onSelect={setClientId}/>
      <ExerciseBox {...x} />
      <button
        className="btn tbn-sm btn-success"
        onClick={() => saveExerciseToBackend({...x})}
      >
        add to client
      </button>
    </div>
  ));

  console.log(allExercises);

  return <div className="content">{allExercises}</div>;

}
export default ExercisesList;
