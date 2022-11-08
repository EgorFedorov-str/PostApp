import React from 'react'
import { getPages } from '../../../utils/pages';

function Pagination({totalPages, page, changePage}) {
    let pagesArray = getPages(totalPages);
  return (
    <div className="page__wrapper">
        {pagesArray.map((p) => (
          <span
            onClick={() => changePage(p)}
            key={p}
            className={page === p ? 'page page__current' : 'page'}>
            {p}
          </span>
        ))}
      </div>
  )
}

export default Pagination