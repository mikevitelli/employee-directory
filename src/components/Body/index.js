import React from "react";

const Body = ({ users }) => {
  // const [developerState];
  return (
    // mapped user array in rows
    // example files
    <tbody id="myTable">
      <tr>
        <td>An Employee's Name</td>
        <td>An Employee's Image</td>
        <td>An Employee's Email</td>
        <td>An Employee's Phone</td>
        <td>An Employee's DOB</td>
      </tr>
      <tr>
        <td>Another Employee's Name</td>
        <td>Another Employee's Image</td>
        <td>Another Employee's Email</td>
        <td>Another Employee's Phone</td>
        <td>Another Employee's DOB</td>
      </tr>
    </tbody>
  );
};

export default Body;
