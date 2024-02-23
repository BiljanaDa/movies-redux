import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesService from "../services/movies.service";
import {
  movieSelector,
  searchResultsSelector,
  searchTermSelector,
} from "../store/movie/selectors";
import { setMovie } from "../store/movie/slice";
import MovieRow from "../components/MovieRow";
import { Container, Row } from "react-bootstrap";

export default function AppMovies() {
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);
  const searchTerm = useSelector(searchTermSelector);
  const searchResults = useSelector(searchResultsSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MoviesService.getAllMovies();

        const data = response?.movies || [];

        console.log("Data from API:", data);

        dispatch(setMovie(data));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [dispatch]);

  const moviesToDisplay = searchTerm ? searchResults : movies;

  return (
    <Container>
      <h1>Movies</h1>
      <Row>
        {moviesToDisplay.map((movie) => (
          <MovieRow key={movie.id} movie={movie} />
        ))}
      </Row>
    </Container>
  );
}
