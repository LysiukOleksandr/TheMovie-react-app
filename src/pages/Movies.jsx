import React from "react";
import { SearchMenu, MoviesContent, Pagination } from "../components";
import { fetchMovies } from "../redux/actions/search";
import { useSelector, useDispatch } from "react-redux";
const Movies = () => {
  const dispatch = useDispatch();
  const movies = useSelector(({ search }) => search.movies);
  const isFetching = useSelector(({ search }) => search.isFetching);
  const currentPage = useSelector(({ search }) => search.currentPage);
  const totalPages = useSelector(({ search }) => search.totalPages);
  const searchValue = useSelector(({ search }) => search.inputValue);
  //
  React.useEffect(() => {
    dispatch(fetchMovies("", currentPage));
  }, [dispatch, currentPage]);
  const nextPage = (pageNumber) => {
    dispatch(fetchMovies(searchValue, pageNumber));
  };

  return (
    <div>
      <div className="movies__top">
        <SearchMenu currentPage={currentPage} />
      </div>
      <div className="container">
        <MoviesContent movies={movies} isFetching={isFetching} />
        <Pagination
          pages={totalPages}
          nextPage={nextPage}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Movies;
