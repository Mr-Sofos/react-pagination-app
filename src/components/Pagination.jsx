import React from "react";

const Pagination = ({ albumsPerPage, totalAlbums, onHandleChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              href="#/"
              className="page-link"
              onClick={() => onHandleChange(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
