import React, { useState } from 'react';
import './Paginado.css';

export function Paginado({ dogsPerPage, allDogs, paginado, currentPage }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [maxPage, setMaxPage] = useState(10);

  const handleClick = (value) => {
    paginado(value);
  };

  const handleNext = () => {
    if (maxPage < pageNumbers.length) {
      setMaxPage(maxPage + 10);
    }
  };

  const handlePrev = () => {
    if (maxPage > 10) {
      setMaxPage(maxPage - 10);
    }
  };

  const visiblePages = pageNumbers.slice(maxPage - 10, maxPage);

  return (
    <div className='paginado-container'>
      <ul className='paginado'>
        <li>
          <button onClick={handlePrev} className='button-next-prev'>
            Prev
          </button>
        </li>
        {visiblePages.map((number) => (
          <li key={number} className='paginado-item'>
            <button
              onClick={() => handleClick(number)}
              className={`paginado-link ${
                number === currentPage ? 'active' : ''
              }`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button onClick={handleNext} className='button-next-prev'>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
