import { useEffect } from "react";
import {
  DataGrid,
  type GridFilterState,
  type GridPaginationState,
  type GridSortingState,
} from "@mui/x-data-grid";
import { useMovieStore } from "@/store/MovieStore/useMovieStore";
import { columns } from "@/constants/columns";

export const MoviesTable = () => {
  const { movies, gridState, setGridState, setSelectedMovie, fetchMovies } =
    useMovieStore();
  const currentGridState = gridState ?? {};

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
        initialState={gridState || undefined}
        onFilterModelChange={(model) => {
          setGridState({
            ...currentGridState,
            filter: {
              ...currentGridState.filter,
              filterModel: model,
            } as GridFilterState,
          });
        }}
        onSortModelChange={(model) => {
          setGridState({
            ...currentGridState,
            sorting: {
              ...currentGridState.sorting,
              sortModel: model,
            } as GridSortingState,
          });
        }}
        onPaginationModelChange={(model) => {
          setGridState({
            ...currentGridState,
            pagination: {
              ...currentGridState.pagination,
              paginationModel: model,
            } as GridPaginationState,
          });
        }}
        onRowClick={(params) => setSelectedMovie(params.row)}
        sx={{
          "& .MuiDataGrid-cell": {
            display: "flex",
            alignItems: "center",
            py: 1,
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
