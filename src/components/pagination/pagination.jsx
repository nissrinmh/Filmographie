import React from "react";
import style from "./pagination.module.css";

const Pagination = ({ actuelle, total, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= total; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={style.pagination}>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={actuelle === number ? style.active : style.inactive}
        >
          {number}
        </button>
      ))}
  
    </div>
  );
};

export default Pagination;
