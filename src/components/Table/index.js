import React from "react";
import TableBody from "../TableBody";
// import API from "../../utils/API";
// table recives: heading., user, and handleSort
const Table = ({ users, headings, handleSort }) => {
  // map headings like tds in tablebody component. pass each one it's name and width style width key name each with an onlick funtion for sorting handleSort(name.toLowercase) name comes from map function and pass handle sort to table

  return (
    <div>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            {headings.map(({ name, width }) => {
              return (
                <th
                  key={name}
                  style={{ width }}
                  onClick={() => {
                    handleSort(name.toLowerCase());
                  }}
                >
                  {name}
                </th>
              );
            })}
          </tr>
        </thead>
        <TableBody users={users} />
      </table>
    </div>
  );
};

export default Table;
