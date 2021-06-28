import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const MovieForm = (props) => {
  const [movie, setMovie] = useState(() => {
    return {
      moviename: props.movie ? props.movie.moviename : "",
      star: props.movie ? props.movie.author : "",
      rating: props.movie ? props.movie.quantity : "",
      budget: props.movie ? props.movie.price : "",
      date: props.movie ? props.movie.date : ""
    };
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { moviename, star, budget, rating } = movie;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [moviename, star, budget, rating];
    let errorMsg = "";

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== "" && value !== "0";
    });

    if (allFieldsFilled) {
      const movie = {
        id: uuidv4(),
        moviename,
        star,
        budget,
        rating,
        date: new Date()
      };
      props.handleOnSubmit(movie);
    } else {
      errorMsg = "Please fill out all the fields.";
    }
    setErrorMsg(errorMsg);
  };

  const ratingValidation = (event) => {
    const { value } = event.target;
    if (value.length === 2) {
      //alert("Max length Reached");
      event.preventDefault();
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "quantity":
        if (value === "" || parseInt(value) === +value) {
          setMovie((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      case "price":
        if (value === "" || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setMovie((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setMovie((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Movie Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="moviename"
            value={moviename}
            placeholder="Enter name of book"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Movie Star</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="star"
            value={star}
            placeholder="Enter name of star"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="quantity">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="rating"
            value={rating}
            max="10"
            maxLength="2"
            placeholder="Enter rating of the movie"
            onChange={handleInputChange}
            onKeyDown={ratingValidation}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Movie Budget (in Mn)</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="budget"
            value={budget}
            placeholder="Enter budget of the movie"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>

        <NavLink
          to="/"
          className="btn submit-btn cancelbtn"
          activeClassName="active"
          exact
          variant="danger"
        >
          Cancel
        </NavLink>
      </Form>
    </div>
  );
};

export default MovieForm;
