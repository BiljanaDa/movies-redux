import { createAction, createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    searchTerm: "",
    searchResults: [],
    selectedMovies: {
      selected: [],
      counter: 0,
    },
    sortOrder: "asc",
  },
  reducers: {
    setMovie(state, action) {
      state.data = action.payload;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchResults(state, action) {
      state.searchResults = action.payload;
    },
    setMovieSelection(state, action) {
      const movieId = action.payload;
      const isSelected = state.selectedMovies.selected.includes(movieId);

      if (isSelected) {
        state.selectedMovies.selected = state.selectedMovies.selected.filter(
          (id) => id !== movieId
        );
        state.selectedMovies.counter -= 1;
      } else {
        state.selectedMovies.selected.push(movieId);
        state.selectedMovies.counter += 1;
      }
    },
    selectAllMovies(state) {
      state.selectedMovies.selected = state.data.map((movie) => movie.id);
      state.selectedMovies.counter = state.data.length;
    },
    deselectAllMovies(state) {
      state.selectedMovies.selected = [];
      state.selectedMovies.counter = 0;
    },
    sortMoviesByName(state) {
      state.data.sort((a, b) => {
        const nameA = a.title.toUpperCase();
        const nameB = b.title.toUpperCase();
        return state.sortOrder === "asc"
          ? nameA.localeCompare(nameB)
          : nameB.localeCompare(nameA);
      });
    },

    sortMoviesByDuration(state) {
      state.data.sort((a, b) => {
        return state.sortOrder === "asc"
          ? a.duration - b.duration
          : b.duration - a.duration;
      });
    },
    toggleSortOrder(state) {
      state.sortOrder = state.sortOrder === "asc" ? "desc" : "asc";
    },
  },
});

export const {
  setMovie,
  setSearchTerm,
  setSearchResults,
  setMovieSelection,
  selectAllMovies,
  deselectAllMovies,
  sortMoviesByName,
  sortMoviesByDuration,
  toggleSortOrder,
} = MovieSlice.actions;

export default MovieSlice.reducer;
