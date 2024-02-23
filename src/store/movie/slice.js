import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
    searchTerm: "",
    searchResults: [],
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
  },
});

export const { setMovie, setSearchTerm, setSearchResults } = MovieSlice.actions;
export default MovieSlice.reducer;
