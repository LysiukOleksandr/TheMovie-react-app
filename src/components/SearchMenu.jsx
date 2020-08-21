import React from "react";
import { useDispatch } from "react-redux";
import { SortPopup } from "../components";
import { fetchMovies } from "../redux/actions/search";

// items in SortPopup component

const items = [
  { name: "Popular", type: " popular" },
  { name: "Rating", type: "rating" },
  { name: "Alphabete", type: "alphabete" },
];

function SearchMenu() {
  const dispatch = useDispatch();

  //React Hooks
  const [inputValue, setInputValue] = React.useState("");

  // Change value in search input
  const onChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const onClickButton = () => {
    dispatch(fetchMovies(inputValue));
  };

  React.useEffect(() => {
    dispatch(fetchMovies(""));
  }, []);

  return (
    <>
      <SortPopup items={items} />
      <div className="search-block">
        <input
          type="text"
          className="search-block__input"
          placeholder="Search"
          value={inputValue}
          onChange={onChangeInputValue}
        />
        <div className="search-block__button" onClick={onClickButton}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnssketch="http://www.bohemiancoding.com/sketch/ns"
          >
            <title>icon 111 search</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              sketchtype="MSPage"
            >
              <g
                id="icon-111-search"
                sketchtype="MSArtboardGroup"
                fill="#000000"
              >
                <path
                  d="M19.4271164,21.4271164 C18.0372495,22.4174803 16.3366522,23 14.5,23 C9.80557939,23 6,19.1944206 6,14.5 C6,9.80557939 9.80557939,6 14.5,6 C19.1944206,6 23,9.80557939 23,14.5 C23,16.3366522 22.4174803,18.0372495 21.4271164,19.4271164 L27.0119176,25.0119176 C27.5621186,25.5621186 27.5575313,26.4424687 27.0117185,26.9882815 L26.9882815,27.0117185 C26.4438648,27.5561352 25.5576204,27.5576204 25.0119176,27.0119176 L19.4271164,21.4271164 L19.4271164,21.4271164 Z M14.5,21 C18.0898511,21 21,18.0898511 21,14.5 C21,10.9101489 18.0898511,8 14.5,8 C10.9101489,8 8,10.9101489 8,14.5 C8,18.0898511 10.9101489,21 14.5,21 L14.5,21 Z"
                  id="search"
                  sketchtype="MSShapeGroup"
                ></path>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

export default SearchMenu;
