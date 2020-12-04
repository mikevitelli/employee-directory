import React from "react";
import "./style.css";

const Search = () => {
  return (
    //     <div className="container">
    //       <div className="row">
    //         <div className="col">
    //           <div className="searchbox">
    //             <div className="form">
    //               <input
    //                 type="search"
    //                 placeholder="Search Employee"
    //                 className="form-control "
    //               />
    //             </div>
    //           </div>
    //           <button className="btn" type="submit"></button>
    //         </div>
    //       </div>
    // </div>

    <div className="input-group md-form form-sm form-2 pl-0">
      <input
        className="form-control my-0 py-1 red-border"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="input-group-append">
        <span className="input-group-text red lighten-3" id="basic-text1">
          <i className="fas fa-search text-grey" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};

export default Search;
