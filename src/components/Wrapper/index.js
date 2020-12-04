import React, { Children } from "react";
import Header from "../Header/index";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      {children}
      {/* <Header></Header>; */}
    </div>
  );
};

export default Wrapper;
