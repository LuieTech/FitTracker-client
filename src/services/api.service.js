// src/api.js
import axios from 'axios';

const apiService = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'x-rapidapi-host': import.meta.env.VITE_RAPIDAPI_HOST,
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
  },
});

export function getBodyPartExercise( bodyPart ){
  return apiService.get("exercises/bodyPart/"+bodyPart)
    .then((response) => response.data)
    .catch((error) => console.error("Error while fetching in service file: ", error))
}

export function getAllExercises() {
  return apiService.get('/exercises')
    .then((response) => response.data)
    .catch(error => console.error("Error while fetching in service file: ", error))
}
