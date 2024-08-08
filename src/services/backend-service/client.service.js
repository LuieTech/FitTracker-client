import axios from "axios";

const service = axios.create(
  {
    baseURL: import.meta.env.VITE_BACKEND_BASE_URL
  }
)

export function createClient(body){
  console.log("body client desde el service", body)
  return service.post('/clients', body)
    .then((res) => res.data)
    .catch((err) => console.log("Error while creating client in service: ", error))
}

export function getClientsByTrainerId(trainerId) {
  return service.get(`/trainers/clients/`+trainerId)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching clients:", error.response.data.message);
      return []; 
    });
}


export function getClientById(clientId){
  return service.get("/clients/"+clientId)
    .then((res) => res.data)
    .catch((error) => {
      if(error.response.status === 404) {
        return Promise.resolve("Client notfound");
      } else { 
        console.log(error.response.data.message)
       }
    })
}

export function deleteClientById(clientId){
  return service.delete("/clients/"+clientId)
    .then((res) => res.data)
    .catch((error) => {
      if(error.response.status === 404) {
        return Promise.resolve("Client notfound");
      } else { 
        console.log(error.response.data.message)
      }
    })
}