import React, { useContext } from "react";
import MovieForm from "./MovieForm";
import { useParams } from "react-router-dom";
import MoviesContext from "../context/MoviesContext";

const EditMovie = ({ history }) => {
  const { movies, setMovies } = useContext(MoviesContext);
  const { id } = useParams();
  const movieToEdit = movies.find((movie) => movie.id === id);

  const handleOnSubmit = (movie) => {
    const filteredMovies = movies.filter((movie) => movie.id !== id);
    setMovies([movie, ...filteredMovies]);
    history.push("/");
  };

  return (
    <div>
      <MovieForm movie={movieToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default EditMovie;
