import React from "react";
import "./style.css";

const Search = () => {
  return (
    <div className="row">
      <div className="col">
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            // onChange={(event) => context.handleSearchChange(event)}
          />

          <br />
          <button type="button" className="btn btn-dark">
            ~ I'm Feeling Lucky ~
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Search;
