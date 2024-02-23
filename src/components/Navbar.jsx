import React from "react";
import { Container, Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieSearchComponent from "./MovieSearchComponent";

export default function Navbar() {
  return (
    <BootstrapNavbar
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to={"/movies"}>
          Movie App
        </BootstrapNavbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} className="btn btn-light" to="/movies">
            Movies
          </Nav.Link>
        </Nav>
        <MovieSearchComponent />
      </Container>
    </BootstrapNavbar>
  );
}
