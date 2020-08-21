import React from "react";
import { SearchMenu, MoviesContent } from "../components";
import { useSelector } from "react-redux";
const Movies = () => {
  const movies = useSelector(({ search }) => search.movies);
  const isFetching = useSelector(({ search }) => search.isFetching);

  return (
    <div>
      <div className="movies__top">
        <SearchMenu />
      </div>
      <div className="container">
        <MoviesContent movies={movies} isFetching={isFetching} />
      </div>
    </div>
  );
};

export default Movies;
