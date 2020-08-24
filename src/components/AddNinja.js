import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleAge = (e) => {
    this.setState({
      age: parseInt(e.target.value),
    });
  };

  handleBelt = (e) => {
    this.setState({
      belt: e.target.value,
    });
  };

  render() {
    return (
      <div>
        {/* This is old method*/}
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleName} />
          <label htmlFor="age">Age:</label>
          <input type="text" id="age" onChange={this.handleAge} />
          <label htmlFor="belt">Belt:</label>
          <input type="text" id="belt" onChange={this.handleBelt} />
        </form>
      </div>
    );
  }
}

export default AddNinja;
