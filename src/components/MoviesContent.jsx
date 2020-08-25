import React from "react";
import PropTypes from "prop-types";
import { MovieItem, Preloader } from "./index";

const MoviesContent = ({ movies, isFetching }) => {
  return (
    <div className="movies__wrap">
      {isFetching ? (
        <Preloader />
      ) : (
        <div className="movies__items">
          {movies &&
            movies.map((obj, index) => <MovieItem key={index} {...obj} />)}
        </div>
      )}
    </div>
  );
};

MoviesContent.propTypes = {
  movies: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

MoviesContent.defaultProps = {
  movies: [],
  isFetching: true,
};

export default MoviesContent;
