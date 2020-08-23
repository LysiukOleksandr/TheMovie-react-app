import axios from "axios";

export const setMovieDetails = (movieData) => ({
  type: "SET_MOVIE_DETAIL",
  payload: [movieData],
});

export const fetchMovieDetails = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${594718}?api_key=9bfd75734352fe8cee4fdfdc1474ece9`
    )
    .then(({ data }) => {
      dispatch(setMovieDetails(data));
    });
};
