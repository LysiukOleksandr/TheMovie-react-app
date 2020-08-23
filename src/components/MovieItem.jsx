import React from "react";
import { Link } from "react-router-dom";
const MovieItem = ({
  id,
  title,
  poster_path: poster,
  vote_average: rating,
  release_date: date,
}) => {
  return (
    <div className="movie-item">
      <Link to={`/movie/${id}`}>
        <div className="movie-item__image">
          <img
            src={
              poster
                ? `https://image.tmdb.org/t/p/w400${poster}`
                : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
            }
            alt=""
          />
        </div>
      </Link>
      <div className="movie-item__info">
        <div className="movie-item__rating">{rating}</div>
        <div className="movie-item__title">{title}</div>
        <div className="movie-item__date">{date}</div>
      </div>
    </div>
  );
};

export default MovieItem;
