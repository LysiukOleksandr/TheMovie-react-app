import React from "react";

const Movies = () => {
  return (
    <div>
      <div className="movies__top">
        <div className="sort-popup">
          <span className="sort-popup__text">Sort by:</span>
          <span className="sort-popup__label">
            popular
            {/* <svg
              className="sort-popup__icon"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="18.362px"
              height="18.362px"
              viewBox="0 0 292.362 292.362"
              style="enable-background: new 0 0 292.362 292.362;"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
               C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
               s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg> */}
          </span>
          <ul>
            <li className="sort-popup__item sort-popup__item--active">
              Popular +
            </li>
            <li className="sort-popup__item">Popupar -</li>
            <li className="sort-popup__item">Rating +</li>
            <li className="sort-popup__item">Rating -</li>
            <li className="sort-popup__item">Alphabete</li>
          </ul>
        </div>
        <div className="search-block">
          <input
            type="text"
            className="search-block__input"
            placeholder="Search"
          />
          <div className="search-block__button">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              xmlnsSketch="http://www.bohemiancoding.com/sketch/ns"
            >
              <title>icon 111 search</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketchType="MSPage"
              >
                <g
                  id="icon-111-search"
                  sketchType="MSArtboardGroup"
                  fill="#000000"
                >
                  <path
                    d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"
                    id="search"
                    sketchType="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="movies__items">
          <div className="movie-item">
            <div className="movie-item__image">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="movie-item__info">
              <div className="movie-item__rating">95%</div>
              <div className="movie-item__title">Avengers</div>
              <div className="movie-item__date">25-03-2001</div>
            </div>
          </div>

          <div className="movie-item">
            <div className="movie-item__image">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Mulan_%28poster%29.jpg/235px-Mulan_%28poster%29.jpg"
                alt=""
              />
            </div>
            <div className="movie-item__info">
              <div className="movie-item__rating">95%</div>
              <div className="movie-item__title">
                Avengers The Ligua Blalala andlalalalal
              </div>
              <div className="movie-item__date">25-03-2001</div>
            </div>
          </div>
          <div className="movie-item">
            <div className="movie-item__image">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Mulan_%28poster%29.jpg/235px-Mulan_%28poster%29.jpg"
                alt=""
              />
            </div>
            <div className="movie-item__info">
              <div className="movie-item__rating">95%</div>
              <div className="movie-item__title">Avengers</div>
              <div className="movie-item__date">25-03-2001</div>
            </div>
          </div>
          <div className="movie-item">
            <div className="movie-item__image">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Mulan_%28poster%29.jpg/235px-Mulan_%28poster%29.jpg"
                alt=""
              />
            </div>
            <div className="movie-item__info">
              <div className="movie-item__rating">95%</div>
              <div className="movie-item__title">Avengers</div>
              <div className="movie-item__date">25-03-2001</div>
            </div>
          </div>
          <div className="movie-item">
            <div className="movie-item__image">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Mulan_%28poster%29.jpg/235px-Mulan_%28poster%29.jpg"
                alt=""
              />
            </div>
            <div className="movie-item__info">
              <div className="movie-item__rating">95%</div>
              <div className="movie-item__title">Avengers</div>
              <div className="movie-item__date">25-03-2001</div>
            </div>
          </div>
          <div className="movie-item">
            <div className="movie-item__image">
              <img
                src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Mulan_%28poster%29.jpg/235px-Mulan_%28poster%29.jpg"
                alt=""
              />
            </div>
            <div className="movie-item__info">
              <div className="movie-item__rating">95%</div>
              <div className="movie-item__title">Avengers</div>
              <div className="movie-item__date">25-03-2001</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
