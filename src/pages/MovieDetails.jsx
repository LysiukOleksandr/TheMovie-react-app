import React from "react";
const MovieDetails = () => {
  return (
    <div className="movie-details">
      <div
        className="movie-details__top"
        style={{
          background: `url(
            "https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg"
          )`,
          backgrounRepeat: ` no-repeat`,
          backgrounPosition: `center`,
          backgroundSize: `cover`,
        }}
      >
        {/* background: url('https://image.tmdb.org/t/p/original/orjiB3oUIsyz60hoEqkiGpy5CeO.jpg')noRepeat center center/cover; */}
        <div className="movie-details__top-wrapper">
          <div className="movie-details__poster">
            <img
              className="movie-details__image"
              src="https://image.tmdb.org/t/p/w500/tqXiOD5rTyHgabO73Tpw9JDbd88.jpg"
              alt=""
            />
          </div>
          <div className="movie-details__info">
            <h1 className="movie-details__name">
              Avengers<span className="movie-details__year">(2020)</span>
            </h1>
            <div className="movie-details__facts">
              <span className="movie-details__release">25/04/2019</span>
              <span className="movie-details__genres">
                adventure, science fiction, action
              </span>
              <span className="movie-details__runtime">3h 2m</span>
            </div>
            <div className="movie-details__rating">83%</div>
            <span className="movie-details__tagline">
              Part of the journey is the end.
            </span>
            <div className="movie-details__about">
              <h2 className="movie-details__title">Overwiew</h2>
              <p className="movie-details__overwiev">
                After the devastating events of Avengers: Infinity War, the
                universe is in ruins due to the efforts of the Mad Titan,
                Thanos. With the help of remaining allies, the Avengers must
                assemble once more in order to undo Thanos' actions and restore
                order to the universe once and for all, no matter what
                consequences may be in store.
              </p>
              <p className="movie-details__production-countries">
                United States of America
              </p>

              <p className="movie-details__production-companies">
                Marvel Studios
              </p>
            </div>
            <button className="movie-details__back">Back Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
