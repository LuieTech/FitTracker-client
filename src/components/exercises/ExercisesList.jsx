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
      const storedData = localStorage.getItem('exercises')
      if(storedData){
        setExercisesList(JSON.parse(storedData))
        console.log("loaded from local storage");        
      } else {
        try {          
          const data = await getAllExercises();
          setExercisesList(data);
          localStorage.setItem('exercises', JSON.stringify(data));
          console.log("loaded from API call and saved to localStorage");          
        } catch (error) {
          console.error("failed to fetch exercises", error);
        }
      }
  };

  useEffect(() => {
    getExercises();
  }, []);

  

  const saveExerciseToBackend = (exercise) => {
    if (clientId && exercise) {
      try {
        const modifiedExercise = {
          gifUrl: exercise.gifUrl,
          name: exercise.name,
          instructions: exercise.instructions,
          bodyPart: exercise.bodyPart,
          client: { id: clientId },
        };
        addExercise(modifiedExercise);
      } catch (error) {
        console.log("error from saveExerciseToBackend function: ", error);
      }
    }
  };

  const allExercises = exercisesList?.map((x) => (
    <div key={x?.id} className="box-btn">
      <SelectClient onSelect={setClientId} />
      <ExerciseBox x={x} />
      <button
        className="btn tbn-sm btn-success"
        onClick={() => saveExerciseToBackend({ ...x })}
      >
        add to client
      </button>
    </div>
  ));

  return <div className="content">
    {
      allExercises.length ? allExercises : <h1>Error downloading exercise API</h1>
    }
  </div>;
}
export default ExercisesList;
