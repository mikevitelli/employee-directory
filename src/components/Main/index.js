import React, { Component } from "react";
import Search from "../Search/index.js";
// import TableBody from "../TableBody/index.js";
import Table from "../Table/index.js";
import API from "../../utils/API";

export default class Main extends Component {
  // const state = useState({
  //   users: [],
  //   order: "ascend",
  //   filteredUsers: [],
  // });

  state = {
    users: [],
    order: "ascend",
    filteredUsers: [],
  };

  headings = [
    { name: "Name", width: "10%" },
    { name: "Image", width: "10%" },
    { name: "Email", width: "20%" },
    { name: "Phone", width: "20%" },
    { name: "DOB", width: "10%" },
  ];
  // handle seach change function

  handleSearchChange = (event) => {
    const filter = event.target.value;
    const filteredList = this.state.users.filter((item) => {
      let values = item.name.first.toLowerCase();
      return values.indexOf(filter.toLowerCase()) !== -1;
    });

    this.setState({
      filteredUsers: filteredList,
    });
  };

  // handle sort function

  handleSort = (heading) => {
    // check if state.order is ascending or descending and reverse the value
    // const sorted users
    // take filtered users from state and use .sort(helper function defined above)
    // if state = ascending
    // take and be and
  };

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
            <Table users={this.state.filteredUsers} headings={this.headings} />
          </div>
        </div>
      </div>
    );
  }
}
