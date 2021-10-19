import React from "react";
import useStyles from "../styles";

function PaginationComponent({ nextPage, prevPage, goToPage, pages }) {
  const classes = useStyles();
  let pageButtons = [];
  for (let i = 1; i <= pages; i++) {
    pageButtons.push(
      <button
        className={classes.paginationButton}
        key={i}
        onClick={() => goToPage(i)}
      >
        {i}
      </button>
    );
  }

  return (
    <div className={classes.pagination}>
      {prevPage && (
        <button className={classes.paginationBtn} onClick={prevPage}>
          Previous
        </button>
      )}
      {pageButtons}
      {nextPage && (
        <button className={classes.paginationBtn} onClick={nextPage}>
          Next
        </button>
      )}
    </div>
  );
}
export default PaginationComponent;
