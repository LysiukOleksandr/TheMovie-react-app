import React from "react";

const Pagination = ({ pages, currentPage, nextPage }) => {
  const pageLinks = [];

  for (let i = 1; i <= pages + 1; i++) {
    let active = currentPage === i ? "active" : "";

    pageLinks.push(
      <li
        className={`waves-effect ${active}`}
        key={i}
        onClick={() => nextPage(i)}
      >
        {i}
      </li>
    );
  }

  return (
    <div className="pagination">
      <ul className="pagination__row">
        {currentPage > 1 ? (
          <li
            className={`waves-effect`}
            onClick={() => nextPage(currentPage - 1)}
          >
            prev
          </li>
        ) : (
          ""
        )}
        {pageLinks}
        {currentPage < pages + 1 ? (
          <li
            className={`waves-effect`}
            onClick={() => nextPage(currentPage + 1)}
          >
            Next
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default Pagination;
