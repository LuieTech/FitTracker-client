import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//Create
export function createClient(body) {
  return service
    .post("/clients", body)
    .then((res) => res.data)
    .catch((error) =>
      console.log("Error while creating client in service: ", error)
    );
}

//Read
export function getClientsByTrainerId(trainerId) {
  return service
    .get(`/trainers/clients/` + trainerId)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error fetching clients:", error.response.data.message);
      return [];
    });
}

export function getClientById(clientId) {
  return service
    .get("/clients/" + clientId)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        return Promise.resolve("Client notfound");
      } else {
        console.log(error.response.data.message);
      }
    });
}

//Delete
export function deleteClientById(clientId) {
  return service
    .delete("/clients/" + clientId)
    .then((res) => res.data)
    .catch((error) => {
      if (error.response.status === 404) {
        return Promise.resolve("Client notfound");
      } else {
        console.log(error.response.data.message);
      }
    });
}

//Update
export function updateComment(id, comment) {
  return service.patch(`/clients/${id}/comment`, comment);
}
