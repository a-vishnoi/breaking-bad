import React from 'react';

const Pagination = (props) => {
	
	const {totalPages, handlePageClick} = props;
	
	let pages = [];
	
	for(let i = 0; i<totalPages; i++) {
		pages.push(
			<li className="page-item"><button className="page-link" onClick={handlePageClick} value={i+1}>{i+1}</button></li>
		);
	}
	
  return (
	  <nav aria-label="Page navigation example" className="mt-3">
		  <ul className="pagination">
			  {
			    pages.map(page => page)
			  }
		  </ul>
	  </nav>
  );
};

export default Pagination;