import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
  name: "movie",
  initialState: {
    data: [],
  },
  reducers: {
    setMovie(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setMovie } = MovieSlice.actions;
export default MovieSlice.reducer;
