import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesService from "../services/movies.service";
import {
  movieSelector,
  searchResultsSelector,
  searchTermSelector,
  selectedMoviesSelector,
} from "../store/movie/selectors";
import {
  deselectAllMovies,
  selectAllMovies,
  setMovie,
  setMovieSelection,
} from "../store/movie/slice";
import MovieRow from "../components/MovieRow";
import { Button, Container, Row } from "react-bootstrap";

export default function AppMovies() {
  const dispatch = useDispatch();
  const movies = useSelector(movieSelector);
  const searchTerm = useSelector(searchTermSelector);
  const searchResults = useSelector(searchResultsSelector);
  const selectedMovies = useSelector(selectedMoviesSelector);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await MoviesService.getAllMovies();

        const data = response?.movies;

        dispatch(setMovie(data));
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [dispatch]);

  const moviesToDisplay = searchTerm ? searchResults : movies;

  const handleSelectAll = () => {
    console.log("Dispatching selectAllMovies action");
    dispatch(selectAllMovies());
  };

  const handleDeselectAll = () => {
    console.log("Dispatching deselectAllMovies action");
    dispatch(deselectAllMovies());
  };

  const handleSetSelection = (movieId) => {
    dispatch(setMovieSelection(movieId));
  };

  return (
    <Container>
      <h1>Movies</h1>
      <p>Total selected movies: {selectedMovies.counter}</p>
      <Button variant="primary" onClick={handleSelectAll}>
        Select All
      </Button>
      <Button variant="primary" onClick={handleDeselectAll}>
        Deselect All
      </Button>
      {moviesToDisplay.length === 0 ? (
        <p>No movies available.</p>
      ) : (
        <Row>
          {moviesToDisplay.map((movie) => (
            <MovieRow
              key={movie.id}
              movie={movie}
              isSelected={selectedMovies.selected.includes(movie.id)}
              onSetMovieSelection={handleSetSelection}
            />
          ))}
        </Row>
      )}
    </Container>
  );
}
