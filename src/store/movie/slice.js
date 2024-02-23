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
      console.log("Setting movie data:", action.payload);
      state.data = action.payload;
    },
    setSearchTerm(state, action) {
      console.log("Setting search term:", action.payload);
      state.searchTerm = action.payload;
    },
    setSearchResults(state, action) {
      console.log("Setting search results:", action.payload);
      state.searchResults = action.payload;
    },
  },
});

export const { setMovie, setSearchTerm, setSearchResults } = MovieSlice.actions;
export default MovieSlice.reducer;
