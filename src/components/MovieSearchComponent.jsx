import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setSearchResults, setSearchTerm } from "../store/movie/slice";
import MoviesService from "../services/movies.service";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { searchTermSelector } from "../store/movie/selectors";

export default function MovieSearchComponent() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(searchTermSelector);

  const [searchInput, setSearchInput] = useState('')


  const handleSearch = () => {
    dispatch(fetchMovies(searchInput))
  }

  // const handleSearch = async () => {
  //   dispatch(setSearchTerm(searchTerm));

  //   try {
  //     const response = await MoviesService.getAllMovies({ searchTerm });
  //     const data = response.data;

  //     const filteredData = data.filter(
  //       (movie) =>
  //         movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         movie.genres.some((genre) =>
  //           genre.name.toLowerCase().includes(searchTerm.toLowerCase())
  //         )
  //     );

  //     dispatch(setSearchResults(filteredData));
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  return (
    <Form>
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search movies..."
          value={searchInput}
          onChange={(e) => {setSearchInput(e.target.value)}}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>
          Searh
        </Button>
      </InputGroup>
    </Form>
  );
}
