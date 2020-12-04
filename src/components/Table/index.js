import React, { useState } from "react";
import Body from "../Body/index";
// table recives: heading., user, and handleSort
const Table = () => {
  // link context

  const [developerState, setDeveloperState] = useState({
    users: [],
    order: "ascend",
    filteredUsers: [],
    headings: [
      { name: "Name", width: "10%" },
      { name: "Image", width: "10%" },
      { name: "Email", width: "20%" },
      { name: "Phone", width: "20%" },
      { name: "DOB", width: "10%" },
    ],
  });

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
          </tr>
        </thead>
        <Body />
      </table>
    </div>
  );
};

export default Table;
