import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClientById } from "../../services/backend-service/client.service";
import "./ClientDetails.css";
import ProfileCard from "../ProfileCard";
import { getExerciseByClientId } from "../../services/backend-service/exercise.service";
import ExerciseCard from "../ExerciseCard";

function ClientDetails() {
  const { clientId } = useParams();
  const [client, setClient] = useState(null);
  const [exerciseList, setExerciseList] = useState([])
  const [showList, setShowList] = useState(false)

  const getClient = async (id) => {
    const response = await getClientById(id);
    setClient(response);
  };

  const getExercises = async (id) => {
    const response = await getExerciseByClientId(id)
    setExerciseList(response)
  }

  useEffect(() => {
    getClient(clientId);
    exerciseList && getExercises(clientId)
  }, [clientId]);

  const list = exerciseList.map((exercise => (
    
      <ExerciseCard  key={exercise.id}  {...exercise} />
  
      
  )))

  const handleShowListButton = () => {
    setShowList((prev) => !prev)    
  }

  // if(!exerciseList.length) return <h1 className="text-muted">No exercise added yet</h1>

  return (
 
    <div>
      <ProfileCard {...client} handleOnClick={handleShowListButton}/>
      {exerciseList.length ? (
        <>
          <div className="exercise-card">
            {showList && list}
          </div>
        </>
      ) : (
            showList && <h1 className="text-muted">No exercise added yet</h1>
      )}
    </div>
      )
}

export default ClientDetails;
