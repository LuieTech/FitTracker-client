import axios from "axios";

const service = axios.create(
  {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL
  }
)


export function getExerciseByClientId(clientId){
  return service.get("/clients/exercises/"+clientId)
    .then(list => list.data)
    .catch((error) => console.error("Error while getting exercise in exercise service: ", error))

}

export function addExercise(exercise){

  return service.post("/exercises", exercise)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error while adding exercise in service file: ", error))

}

export function deleteExerciseById(id){
  return service.delete("/exercises/"+id)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error while adding exercise in service file: ", error))
}