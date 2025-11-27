import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export const apiKey = API_KEY;

console.log("TMDB API Key:", API_KEY);

export default instance;