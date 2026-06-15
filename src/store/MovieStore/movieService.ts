import Axios from "@/app/config-axios";
import type { IMovie } from "@/store/MovieStore/useMovieStore";

export const movieService = {
  getPopularMovies: async (): Promise<IMovie[]> => {
    try {
      const response = await Axios.get(`/movie/popular`, {});
      return response.data.results;
    } catch (error) {
      console.error("Error fetching popular movies:", error);
      throw error;
    }
  },
};
