import React from "react";
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

export default MoviesContent;
