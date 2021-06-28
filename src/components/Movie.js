import React from "react";
import { Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const mystyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial"
};
const Movie = ({
  id,
  moviename,
  star,
  budget,
  rating,
  date,
  handleRemoveMovie
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: "18rem" }} className="book">
      <Card.Body style={mystyle}>
        <Card.Title className="book-title">{moviename}</Card.Title>
        <div className="book-details">
          <div>Star: {star}</div>
          <div>Rating: {rating} </div>
          <div>Budget: {budget} </div>
          <div>Date: {new Date(date).toISOString().split("T")[0]} </div>
        </div>
        <Button variant="light" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{" "}
        <Button variant="danger" onClick={() => handleRemoveMovie(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Movie;
