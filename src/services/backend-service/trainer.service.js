import axios from "axios";

const service = axios.create(
  {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL
  }
)

export function fetchTrainer(trainerId){
  return service.get("/trainers/"+trainerId)
    .then(res => res.data)
    .catch(error => {
      if(error.response.status === 404) {
        return ('Trainer not found');
      } else { 
        console.log(error.response.data.message)
       }
    })
}