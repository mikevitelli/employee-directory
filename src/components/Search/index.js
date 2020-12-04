import React, { useContext } from "react";
import "./style.css";
import DirectoryContext from "../../utils/DirectoryContext";

const Search = () => {
  const context = useContext(DirectoryContext);

  return (
    <div className="row">
      <br />
      <div className="md-form mt-0 col">
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(event) => context.handleSearchChange(event)}
        />
        {/* <button type="button" class="btn btn-dark">
          Search
        </button> */}

        <br />
      </div>
    </div>
  );
};

export default Search;
