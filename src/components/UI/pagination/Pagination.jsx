import React from 'react';
import {getPagesArray} from "./pages";

const Pagination = ({totalPages,changePage}) => {

    let pagesArray = getPagesArray(totalPages);
    return (
        <nav aria-label="Page navigation example ">
            <ul className="pagination mt-3 d-flex flex-wrap justify-content-center">
                {pagesArray.map(p => 
                <li
                    className="page-item"
                    onClick={() => changePage(p)}
                    key={p}
                    >
                    <a className="page-link" href="#">{p}</a>
                </li>)}
            </ul>
        </nav>
    );
};

export default Pagination;