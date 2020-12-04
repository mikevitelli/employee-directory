import React from "react";
import Main from "../Main";
import Search from "../Search";

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="header">
          <h1>Employee Rolodex</h1>
          <Search></Search>
          <Main></Main>
        </div>
      </div>
    </div>
  );
};

export default Header;
