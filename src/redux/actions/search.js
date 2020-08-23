import axios from "axios";

export const setMovies = (inputValue) => ({
  type: "SET_MOVIES",
  payload: inputValue,
});

export const isFetching = (boolValue) => ({
  type: "IS_FETCHING",
  payload: boolValue,
});

export const fetchMovies = (searchValue) => (dispatch) => {
  dispatch(isFetching(true));

  // AXIOS GET request.
  // if searchValue is empty,we search 'TOP POPULAR' movies, otherwise we do usual request.

  axios
    .get(
      `https://api.themoviedb.org/3/${
        searchValue !== ""
          ? `search/movie?query=${searchValue}`
          : `movie/popular?`
      }&api_key=9bfd75734352fe8cee4fdfdc1474ece9`
    )
    .then(({ data }) => {
      dispatch(setMovies(data.results));
      dispatch(isFetching(false));
    });
};