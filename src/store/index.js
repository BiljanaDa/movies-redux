import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movie/slice";

export default configureStore({
  reducer: {
    movie: movieReducer,
  },
});
