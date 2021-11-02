import React from "react";
import _ from "lodash";

const Pagination = ({ pageSize, itemsCount, onHandleChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pageCount + 1);
  console.log(pages);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" onClick={() => onHandleChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
