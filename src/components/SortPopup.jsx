import React from "react";
import classNames from "classnames";

function SortPopup({ items }) {
  const [visiblePopup, setVisiblePopup] = React.useState();
  const sortRef = React.useRef();
  const toggleVisiblePopup = (e) => {
    setVisiblePopup(!visiblePopup);
  };

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath());

    if (!path.includes(sortRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  });

  return (
    <div className="sort-popup" ref={sortRef}>
      <span className="sort-popup__text">Sort by:</span>
      <span className="sort-popup__label" onClick={toggleVisiblePopup}>
        popular
        <svg
          className={classNames("sort-popup__icon", {
            rotated: visiblePopup,
          })}
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="18.362px"
          height="18.362px"
          viewBox="0 0 292.362 292.362"
          style={{ enableBackground: "new 0 0 292.362 292.362" }}
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
        </svg>
      </span>

      {/* sort-popup__item */}
      {visiblePopup && (
        <ul className={classNames({ "--open": true })}>
          {items &&
            items.map((item, index) => (
              <li className="sort-popup__item" key={index}>
                {item.name}
              </li>
            ))}
          {/* <li className="sort-popup__item sort-popup__item--active">
            Popular +
          </li>
          <li className="sort-popup__item">Popupar -</li>
          <li className="sort-popup__item">Rating +</li>
          <li className="sort-popup__item">Rating -</li>
          <li className="sort-popup__item">Alphabete</li> */}
        </ul>
      )}
    </div>
  );
}

export default SortPopup;
