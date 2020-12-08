import React from "react";

const TableBody = ({ users }) => {
  return (
    <tbody id="myTable">
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ name, login, picture, email, phone, id }) => {
          return (
            <tr key={login.uuid}>
              <td data-th="Name">
                {name.first} {name.last}
              </td>
              <td>
                <img src={picture.thumbnail} alt={`${name}`}></img>
              </td>
              <td data-th="Email">{email}</td>
              <td data-th="Phone">{phone}</td>
              <td data-th="SSN">{id.value}</td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
};

export default TableBody;
