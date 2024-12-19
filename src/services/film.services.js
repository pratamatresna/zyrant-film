// src/services/movieService.js
import axios from "axios";

export const getMovies = async (callback) => {
  try {
    const response = await axios.get("https://jsonfakery.com/movies/paginated");
    callback(response.data.data); // Mengirim data film ke callback
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
