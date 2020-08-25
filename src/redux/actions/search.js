import axios from "axios";

export const setMovies = (inputValue, totalPages) => ({
  type: "SET_MOVIES",
  payload: [inputValue, totalPages],
});

export const isFetching = (boolValue) => ({
  type: "IS_FETCHING",
  payload: boolValue,
});

export const setInputValue = (string) => ({
  type: "SET_INPUT_VALUE",
  payload: string,
});

export const setCurrentPage = (page) => ({
  type: "SET_PAGINATION_DATA",
  payload: page,
});

export const fetchMovies = (searchValue, pageNumber) => (dispatch) => {
  dispatch(isFetching(true));

  dispatch(setInputValue(searchValue));
  dispatch(setCurrentPage(pageNumber));
  // AXIOS GET request.
  // if searchValue is empty,we search 'TOP POPULAR' movies, otherwise we do usual request.

  axios
    .get(
      `https://api.themoviedb.org/3/${
        searchValue !== ""
          ? `search/movie?query=${searchValue}`
          : `movie/popular?`
      }&api_key=9bfd75734352fe8cee4fdfdc1474ece9&page=${pageNumber}`
    )
    .then(({ data }) => {
      dispatch(setMovies(data.results, data.total_pages));
      dispatch(isFetching(false));
    });
};
