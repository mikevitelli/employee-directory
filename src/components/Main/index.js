import React, { Component, setState } from "react";
import Search from "../Search/index.js";
// import TableBody from "../TableBody/index.js";
import Table from "../Table/index.js";
import API from "../../utils/API";

export default class Main extends Component {
  state = {
    users: [],
    order: "ascend",
    filteredUsers: [],
  };

  headings = [
    { name: "Name", width: "20%" },
    { name: "Image", width: "10%" },
    { name: "Email", width: "15%" },
    { name: "Phone", width: "10%" },
    { name: "SSN", width: "15%" },
  ];
  // handle seach change function
  handleSort = (heading) => {
    if (this.state.order === "descend") {
      setState({
        order: "ascend",
      });
    } else {
      setState({
        order: "descend",
      });
    }

    const compareFunction = (a, b) => {
      if (this.state.order === "ascend") {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return a[heading].first.localeCompare(b[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      } else {
        if (a[heading] === undefined) {
          return 1;
        } else if (b[heading] === undefined) {
          return -1;
        } else if (heading === "name") {
          return b[heading].first.localeCompare(a[heading].first);
        } else {
          return b[heading] - a[heading];
        }
      }
    };

    const sortedUsers = this.state.filteredUsers.sort(compareFunction);

    setState({
      filteredUsers: sortedUsers,
    });
  };

  handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = this.state.users.filter((item) => {
      let values = item.email.toLowerCase();
      // i wanted to get the search function to work by searching both first and last names - but i figured since the API uses the names combined into one string, searching the emails through the search field would do the same thing.

      console.log(values);
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({
      filteredUsers: filteredList,
    });
  };

  // handle sort function

  componentDidMount() {
    API.getUsers().then((res) => {
      console.log(res.data.results);
      // add to state

      this.setState({
        users: res.data.results,
        filteredUsers: res.data.results,
      });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <br />
            <Search handleSearchChange={this.handleSearchChange} />
            <br />
            {/* after writing handleSort() pass it to Table down here */}
            <Table
              users={this.state.filteredUsers}
              headings={this.headings}
              handleSort={this.handleSort}
            />
          </div>
        </div>
      </div>
    );
  }
}
