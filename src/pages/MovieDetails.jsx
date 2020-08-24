import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/actions/details";
const MovieDetails = ({ match }) => {
  //
  let dispatch = useDispatch();
  //
  React.useEffect(() => {
    dispatch(fetchMovieDetails(match.params.id));
  }, [dispatch, match.params.id]);
  //
  const details = useSelector(({ details }) => details);
  return (
    <div className="movie-details">
      <div
        className="movie-details__top"
        style={{
          backgroundImage: `url(${details.backgroundPath})`,
          backgrounRepeat: ` no-repeat`,
          backgrounPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        <div className="movie-details__top-wrapper">
          <div className="movie-details__poster">
            <img
              className="movie-details__image"
              src={`https://image.tmdb.org/t/p/w500/${details.posterPath}`}
              alt=""
            />
          </div>
          <div className="movie-details__info">
            <h1 className="movie-details__name">
              {details.title}
              <span className="movie-details__year">({details.year})</span>
            </h1>
            <div className="movie-details__facts">
              <span className="movie-details__release">{details.date}</span>
              <span className="movie-details__genres">{details.genres}.</span>
              <span className="movie-details__runtime">{details.time} m.</span>
            </div>
            <div className="movie-details__rating">{details.average}</div>
            <span className="movie-details__tagline">{details.tagline}</span>
            <div className="movie-details__about">
              <h2 className="movie-details__title">Overwiew</h2>
              <p className="movie-details__overwiev">{details.overview}</p>
              <p className="movie-details__production-countries">
                {details.productionCountries}.
              </p>

              <p className="movie-details__production-companies">
                {details.productionCompanies}.
              </p>
            </div>
            <Link to="/">
              <button className="movie-details__back">Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
