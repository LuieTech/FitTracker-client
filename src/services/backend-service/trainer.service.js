import axios from "axios";

const service = axios.create(
  {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL
  }
)

export function getTrainer(trainerId){
  return service.get("/trainers/"+trainerId)
    .then(res => res.data)
    .catch(error => console.log("Error fetching trainer in service", error))
}