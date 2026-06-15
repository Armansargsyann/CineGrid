import { useEffect } from "react";
import { useMovieStore } from "../store/MovieStore/useMovieStore";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../constants/columns";

export const MoviesTable = () => {
  const { movies, fetchMovies, setSelectedMovie } = useMovieStore();
  useEffect(() => {
    if (movies.length === 0) {
      fetchMovies();
    }
  }, [fetchMovies, movies.length]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
    <DataGrid
  rows={movies}
  columns={columns}
  getRowHeight={() => "auto"} 
  onRowClick={(params) => setSelectedMovie(params.row)}
  sx={{
    "& .MuiDataGrid-cell": {
      display: "flex",
      alignItems: "center",
      minHeight: "100px !important",
      maxHeight: "300px !important",
    },
    "& .MuiDataGrid-row": {
      minHeight: "100px !important",
      maxHeight: "300px !important",
    },
  }}
/>
    </div>
  );
};
