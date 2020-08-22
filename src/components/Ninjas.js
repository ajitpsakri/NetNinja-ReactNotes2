import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    //destructoring of props
    const { name, age, Belt } = this.props;
    return (
      <div className="ninja">
        <div>name:{this.props.name}</div>
        <div>Age:{this.props.Age}</div>
        <div>Belt:{this.props.Belt}</div>
      </div>
    );
  }
}

export default Ninjas;
