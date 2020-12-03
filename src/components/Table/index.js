import React from "react";
import Body from "../Body/index";
// table recives: heading., user, and handleSort
const Table = () => {
  // link context
  return (
    <div>
      <table>
        <thead>
          <tr>{/* map array of name and width objects to th/s */}</tr>
        </thead>
        <Body users={users}></Body>
      </table>
    </div>
  );
};

export default Table;
