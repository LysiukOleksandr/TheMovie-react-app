import React from "react";

const MovieDetail = () => {
  return (
    <div className="movie-detail">
      <div
        className="movie-detail__top"
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
        <div className="movie-detail__top-wrapper">
          <div className="movie-detail__poster">
            <img
              className="movie-detail__image"
              src="https://image.tmdb.org/t/p/w500/tqXiOD5rTyHgabO73Tpw9JDbd88.jpg"
              alt=""
            />
          </div>
          <div className="movie-detail__info">
            <h1 className="movie-detail__name">
              Bad Boys 3<span className="movie-detail__year">(2020)</span>
            </h1>
            <div className="movie-detail__facts">
              <span className="movie-detail__release">25/04/2019</span>
              <span className="movie-detail__genres">
                adventure, science fiction, action
              </span>
              <span className="movie-detail__runtime">3h 2m</span>
            </div>
            <div className="movie-detail__rating">83%</div>
            <span className="movie-detail__tagline">
              Part of the journey is the end.
            </span>
            <div className="movie-detail__about">
              <h2 className="movie-detail__title">Overwiew</h2>
              <p className="movie-detail__overwiev">
                After the devastating events of Avengers: Infinity War, the
                universe is in ruins due to the efforts of the Mad Titan,
                Thanos. With the help of remaining allies, the Avengers must
                assemble once more in order to undo Thanos' actions and restore
                order to the universe once and for all, no matter what
                consequences may be in store.
              </p>
              <p className="movie-detail__production-countries">
                United States of America
              </p>

              <p className="movie-detail__production-companies">
                Marvel Studios
              </p>
            </div>
            <button className="movie-detail__back">Back Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
