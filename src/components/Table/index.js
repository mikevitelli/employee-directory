import React, { useState, useEffect } from "react";
import TableBody from "../TableBody";
import API from "../../utils/API";
// table recives: heading., user, and handleSort
const Table = ({ users, headings }) => {
  // link context

  // const [developerState, setDeveloperState] = useState({
  //   // users: [],
  //   // order: "ascend",
  //   // filteredUsers: [],
  //   headings: [
  //     { name: "Name", width: "10%" },
  //     { name: "Image", width: "10%" },
  //     { name: "Email", width: "20%" },
  //     { name: "Phone", width: "20%" },
  //     { name: "DOB", width: "10%" },
  //   ],
  // });

  // const handleSearchChange = (event) => {
  //   const filter = event.target.value;
  //   const filteredList = developerState.users.filter((item) => {
  //     let values = item.name.first.toLowerCase();
  //     return values.indexOf(filter.toLowerCase()) !== -1;
  //   });

  //   setDeveloperState({
  //     ...developerState,
  //     filteredUsers: filteredList,
  //   });
  // };

  // useEffect(() => {
  //   API.getUsers().then((results) => {
  //     setDeveloperState({
  //       ...developerState,
  //       users: results.data.results,
  //       filteredUsers: results.data.results,
  //     });
  //   });
  // }, []);

  // useEffect(() => {
  //   API.getUsers().then((res) => {
  //     console.log(res);
  //     // add to state
  //   });
  // });

  // map headings like tds in tablebody component. pass each one it's name and width style width key name each with an onlick funtion for sorting handleSort(name.toLowercase) name comes from map function and pass handle sort to table

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
        <TableBody users={users} />
      </table>
    </div>
  );
};

export default Table;
