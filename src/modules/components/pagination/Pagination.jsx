import React from 'react'

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  theme = 'light',
  className = '',
}) => {
  const pages = []
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i)
  }

  return (
    <nav className={`groker__pagination ${theme} ${className}`} aria-label="Paginación">
      <button
        className="groker__pagination-btn"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        &laquo;
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`groker__pagination-btn ${page === currentPage ? 'groker__pagination-btn--active' : ''}`}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
        >
          {page}
        </button>
      ))}
      <button
        className="groker__pagination-btn"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &raquo;
      </button>
    </nav>
  )
}
