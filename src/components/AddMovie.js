import React, { useContext } from "react";
import MovieForm from "./MovieForm";
import MoviesContext from "../context/MoviesContext";

const AddMovie = ({ history }) => {
  const { movies, setMovies } = useContext(MoviesContext);

  const handleOnSubmit = (movie) => {
    setMovies([movie, ...movies]);
    history.push("/");
  };

  return (
    <React.Fragment>
      <MovieForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddMovie;
