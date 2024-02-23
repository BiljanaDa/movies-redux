import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    searchTerm: "",
    searchResults: [],
    selectedMovies: {
      selected: [], // inicijalno prazan niz
      counter: 0,
    },
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
  },
});

export const { setMovie, setSearchTerm, setSearchResults, setMovieSelection } =
  MovieSlice.actions;
export default MovieSlice.reducer;
