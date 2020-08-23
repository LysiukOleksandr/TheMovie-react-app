import React from "react";
import { SearchMenu, MoviesContent } from "../components";
import { fetchMovies } from "../redux/actions/search";
import { useSelector, useDispatch } from "react-redux";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ search }) => search.movies);
  const isFetching = useSelector(({ search }) => search.isFetching);
  //
  React.useEffect(() => {
    dispatch(fetchMovies(""));
  }, [dispatch]);

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
