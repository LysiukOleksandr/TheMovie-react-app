const defaultState = {
  id: null,
  title: "",
  year: null,
  date: null,
  genres: [],
  time: null,
  average: null,
  tagline: "",
  overview: "",
  backgroundPath: "",
  posterPath: "",
  productionCompanies: [],
  productionCountry: [],
};

const details = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      let year = action.payload.release_date.split("");
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.id,
        year: year[0],
        date: action.payload.release_date,
        genres: action.payload.genres,
        average: action.payload.vote_average,
        tagline: action.payload.tagline,
        overview: action.payload.overview,
        backgroundPath: action.payload.backdrop_path,
        posterPath: action.payload.poster_path,
        productionCompanies: action.payload.production_companies,
        productionCountry: action.payload.production_countries,
      };
      {
        console.log(action);
      }
    default:
      return {
        ...state,
      };
  }
};

export default details;
