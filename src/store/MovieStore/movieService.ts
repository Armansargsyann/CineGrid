
import Axios from "../../app/config-axios";
import type {IMovie} from "../MovieStore/useMovieStore"

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export const movieService = {
  getPopularMovies: async (): Promise<IMovie[]> => {
    try {
      const response = await Axios.get(`/movie/popular`, {
        params: { api_key: API_KEY }
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error; 
    }
  }
};