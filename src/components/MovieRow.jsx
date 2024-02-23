import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setMovieSelection } from "../store/movie/slice";

export default function MovieRow({ movie, isSelected, onSetMovieSelection }) {
  const dispatch = useDispatch();
  const { id, title, genres, description, author, duration, poster_url } =
    movie;
  const handleSelect = () => {
    dispatch(setMovieSelection(id));
  };
  return (
    <li>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={poster_url} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <strong>Genres:</strong>{" "}
            {genres.map((genre, index) => (
              <span key={genre.id}>
                {genre.name}
                {index < genres.length - 1 ? ", " : ""}
              </span>
            ))}
          </Card.Text>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Author: {author}</Card.Text>
          <Card.Text>Duration: {duration} minutes</Card.Text>
          <Button
            variant={isSelected ? "danger" : "primary"}
            onClick={() => onSetMovieSelection(movie.id)}
          >
            {isSelected ? "Deselect" : "Select"}
          </Button>
        </Card.Body>
      </Card>
    </li>
  );
}
