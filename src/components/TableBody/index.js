import React from "react";
// import API from "../../utils/API";

const TableBody = ({ users }) => {
  // const [developerState];

  return (
    // mapped user array in rows
    // example files

    <tbody id="myTable">
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ name, login, picture, email, phone, dob }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Name">
                {name.first} {name.last}
              </td>
              <td>
                <img src={picture.thumbnail} alt={`${name}`}></img>
              </td>
              <td>{email}</td>
              <td>{phone}</td>
              <td>{dob.age}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
      {/* <tr>
        <td>An Employee's Name</td>
        <td>An Employee's Image</td>
        <td>An Employee's Email</td>
        <td>An Employee's Phone</td>
        <td>An Employee's DOB</td>
      </tr>
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
      </tr> */}
    </tbody>
  );
};

export default TableBody;
