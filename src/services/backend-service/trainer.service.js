import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

service.interceptors.request.use(
  service.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("authToken");
      // Evitar añadir el token en las solicitudes de registro
      if (token && config.url !== '/auth/register' && config.url !== '/auth/login') {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  ));  

export function registerTrainer(body) {
  return service
    .post("/auth/register", body)
    .then((res) => {
      console.log("this is the registered trainer from service: ", res.data);

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


