import { createSlice } from "@reduxjs/toolkit";

export const MovieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: []
    }, 
    reducers: {
        setMovie(state, action) {
            state.movies = action.payload;
        }
    }
})

export const { setMovie } = MovieSlice.actions;
export default setMovie.reducer;