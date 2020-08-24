import axios from "axios";

export const setMovieDetails = (arr) => ({
  type: "SET_MOVIE_DETAILS",
  payload: arr,
});

export const fetchMovieDetails = (id) => (dispatch) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=9bfd75734352fe8cee4fdfdc1474ece9`
    )
    .then(({ data }) => {
      dispatch(setMovieDetails(data));
    });
};
