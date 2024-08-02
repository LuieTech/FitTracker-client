import axios from "axios";

const service = axios.create(
  {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL
  }
)

export function addExercise(exercise){

  return service.post("/exercises", exercise)
    .then((res) => console.log(res))
    .catch((error) => console.error("Error while adding exercise in service file: ", error))

}