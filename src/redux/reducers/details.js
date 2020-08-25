const defaultState = {
  id: null,
  title: "",
  year: null,
  date: null,
  genres: "",
  time: null,
  average: null,
  tagline: "",
  overview: "",
  backgroundPath: "",
  posterPath: "",
  productionCompanies: [],
  productionCountries: [],
};

const details = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MOVIE_DETAILS":
      let year = action.payload.release_date.split("-")[0];
      let genres = Object.values(action.payload.genres)
        .reduce((s, i) => {
          s += i.name + ", ";
          return s;
        }, "")
        .replace(/,\s*$/, "");

      let productionCompanies = Object.values(
        action.payload.production_companies
      )
        .reduce((s, i) => {
          s += i.name + ", ";
          return s;
        }, "")
        .replace(/,\s*$/, "");

      let productionCountries = Object.values(
        action.payload.production_countries
      )
        .reduce((s, i) => {
          s += i.name + ", ";
          return s;
        }, "")
        .replace(/,\s*$/, "");

      let backgroundPath = `https://image.tmdb.org/t/p/original${
        action.payload.backdrop_path
          ? action.payload.backdrop_path
          : "/tzve3LD534wsCnhOrSqgJ1mnRma.jpg"
      }`;
      let posterPath = `https://image.tmdb.org/t/p/w500${
        action.payload.poster_path
          ? action.payload.poster_path
          : "/tzve3LD534wsCnhOrSqgJ1mnRma.jpg"
      }`;
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        year: year,
        date: action.payload.release_date,
        genres: genres,
        time: action.payload.runtime,
        average: action.payload.vote_average,
        tagline: action.payload.tagline,
        overview: action.payload.overview,
        backgroundPath: backgroundPath,
        posterPath: posterPath,
        productionCompanies: productionCompanies,
        productionCountries: productionCountries,
      };

    default:
      return {
        ...state,
      };
  }
};

export default details;
