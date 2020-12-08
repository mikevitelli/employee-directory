import React from "react";
import "./style.css";
import Main, { handleSearchChange } from "../../components/Main";

const Search = (props) => {
  return (
    <div className="row">
      <div className="col">
        <div className="md-form mt-0">
          <input
            className="form-control"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={(event) => props.handleSearchChange(event)}
          />

          <br />
        </div>
      </div>
    </div>
  );
};

export default Search;
