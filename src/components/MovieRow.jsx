import React from "react";
import { Card } from "react-bootstrap";

export default function MovieRow({ movie }) {
  const { id, title, genres, description, author, duration, poster_url } =
    movie;
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
        </Card.Body>
      </Card>
    </li>
  );
}
