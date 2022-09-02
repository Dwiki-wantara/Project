import React from "react";
import { Card } from "react-bootstrap";

const MovieList = ({ movieImg, title, year }) => {
  return (
    <Card className="rounded shadow border-0 text-white" style ={{backgroundColor: "black"}}>
      <Card.Img variant="top" src={movieImg} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <p className="text-muted">{year}</p>
      </Card.Body>
    </Card>
  );
};

export default MovieList;
