import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// const Pagination = ({ pages, currentPage, nextPage }) => {
//   const pageLinks = [];

//   for (let i = 1; i <= pages + 1; i++) {
//     let active = currentPage === i ? "active" : "";

//     pageLinks.push(
//       <li key={i} onClick={() => nextPage(i)}>
//         {i}
//       </li>
//     );
//   }

//   return (
//     <div className="pagination">
//       <ul className="pagination__row">
//         {currentPage > 1 ? (
//           <li onClick={() => nextPage(currentPage - 1)}>prev</li>
//         ) : (
//           ""
//         )}
//         {pageLinks}
//         {currentPage < pages + 1 ? (
//           <li onClick={() => nextPage(currentPage + 1)}>Next</li>
//         ) : (
//           ""
//         )}
//       </ul>
//     </div>
//   );
// };

// export default Pagination;

const Pagination = ({ pages, currentPage, onPageChanged }) => {
  const portionSize = 20; // count elements on the page
  let pageLinks = [];

  for (let i = 1; i <= pages; i++) {
    pageLinks.push(i);
  }

  let portionCount = Math.ceil(pages / portionSize);
  let [portionNumber, setPortionNumber] = React.useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className="pagination">
      <ul className="pagination__row">
        {portionNumber > 1 && (
          <li
            className="pagination__button"
            onClick={() => setPortionNumber(portionNumber - 1)}
          >
            PREV
          </li>
        )}
        {pageLinks
          .filter(
            (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
          )
          .map((p) => {
            return (
              <li
                key={p}
                onClick={(e) => onPageChanged(p)}
                className={classNames("pagination__item", {
                  "pagination__item--selected": currentPage === p,
                })}
              >
                {p}
              </li>
            );
          })}

        {portionCount > portionNumber && (
          <li
            className="pagination__button"
            onClick={() => setPortionNumber(portionNumber + 1)}
          >
            NEXT
          </li>
        )}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  pages: 1,
  currentPage: 1,
};

export default Pagination;
