import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token && config.url !== '/auth/register' && config.url !== '/auth/login') {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function registerTrainer(body) {

  const formData = new FormData();

  formData.append(
    "data",
    JSON.stringify({
      username: body.username,
      email: body.email,
      password: body.password
    })
  )

  if(body.avatar){
    formData.append("avatar", body.avatar)
  }

  console.log("This is formData from service", formData);
  

  return service
    .post("/auth/register", formData)
    .then((res) => {
      res.data;
    })
    .catch((error) =>
      console.log("Error while creating trainer in service: ", error)
    );
}

export function loginTrainer(body) {
  return service
    .post("/auth/login", body)
    .then((response) => {
      localStorage.setItem("authToken", response.data.token);
      localStorage.setItem("refreshToken", response.data.refreshToken);
      return service.get("/auth/me");
    })
    .then((response) => response.data)
    .catch((error) => console.log("Error during login: ", error));
}

export function refreshTrainerData(){
  return service
    .get("/auth/me")
    .then((response) => response.data)
    .catch((error) => console.log("Error during refreshing user: ", error));
}

export function updateTrainerInfo(id , body) {
  return service
    .patch(`/trainers/update-info/${id}`, body)
    .then((response) => response.data)
    .catch((error) => console.log("Error during updating user: ", error));
}

export function logoutTrainer() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("trainerId");
}

