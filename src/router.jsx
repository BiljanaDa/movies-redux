import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AppMovies from "./pages/AppMovies";

export default function router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/movies"} />} />
      <Route path="/movies" element={<AppMovies />} />
    </Routes>
  );
}
