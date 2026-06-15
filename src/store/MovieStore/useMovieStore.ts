import { create } from "zustand";
import { persist } from "zustand/middleware";
import { movieService } from "@/store/MovieStore/movieService";
import { type GridState } from "@mui/x-data-grid"; 

export interface IMovie {
  id: number;
  title: string;
  poster_path: string | null;
  overview: string;
  vote_average: number;
  release_date: string;
}

interface IMovieStore {
  movies: IMovie[];
  selectedMovie: IMovie | null;
  gridState: Partial<GridState> | null; 
  setMovies: (movies: IMovie[]) => void;
  setSelectedMovie: (movie: IMovie | null) => void;
  setGridState: (state: Partial<GridState>) => void; 
  fetchMovies: () => Promise<void>; 
}

export const useMovieStore = create<IMovieStore>()(
  persist(
    (set) => ({
      movies: [],
      selectedMovie: null,
      gridState: null,
      setMovies: (movies) => set({ movies }),
      setSelectedMovie: (movie) => set({ selectedMovie: movie }),
      setGridState: (gridState) => set({ gridState }),
      
      fetchMovies: async () => {
        try {
          const movies = await movieService.getPopularMovies();
          set({ movies });
        } catch (error) {
          console.error("Failed to fetch movies:", error);
        }
      },
    }),
    {
      name: "movie-storage",
    },
  ),
);