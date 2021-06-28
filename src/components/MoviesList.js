import React, { useContext } from "react";
import _ from "lodash";
import Movie from "./Movie";
import MoviesContext from "../context/MoviesContext";

const MoviesList = () => {
  const { movies, setMovies } = useContext(MoviesContext);

  const handleRemoveMovie = (id) => {
    setMovies(movies.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(movies) ? (
          movies.map((movie) => (
            <Movie
              key={movie.id}
              {...movie}
              handleRemoveMovie={handleRemoveMovie}
            />
          ))
        ) : (
          <p className="message">
            No movies available. Please add some movies.
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
