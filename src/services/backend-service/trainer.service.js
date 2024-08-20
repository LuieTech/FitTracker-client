import axios from "axios";

const service = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_BASE_URL,
});

service.interceptors.request.use(
  service.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("authToken");
      // Evitar añadir el token en las solicitudes de registro
      if (token && config.url !== '/auth/register') {
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
    .then(async (res) => {
      console.log("Tokens received: ", res.data);

      // Guarda los tokens en el localStorage
      localStorage.setItem("authToken", res.data.token);
      localStorage.setItem("refreshToken", res.data.refreshToken);

      // Usa el accessToken para obtener los datos del Trainer
      const trainerData = await fetchTrainerData(); // Cambiaré cómo obtienes el ID del Trainer
      return {
        trainerData,
        token: res.data.token,
        refreshToken: res.data.refreshToken,
      };
    })
    .catch((error) => {
      console.log("Error during login: ", error);
      throw error;
    });
}

export function fetchTrainerData() {
  return service
    .get("/auth/me") // o el endpoint que tengas configurado para obtener los datos del usuario
    .then((res) => {
      console.log("Trainer data received: ", res.data);
      res.data;
    })
    .catch((error) => {
      console.log("Error fetching trainer data: ", error);
      throw error;
    });
}
