import axios from "axios";

const service = axios.create(
  {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL
  }
)

export function getClientsByTrainerId(trainerId){
  return service.get(`/trainers/clients/${trainerId}`)
    .then((response) => response.data)
    .catch((error) => console.log("Error while fetching in service file: ", error))
}