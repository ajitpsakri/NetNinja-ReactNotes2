import React, { Component } from "react";

class Ninjas extends Component {
  render() {
    //destructoring of props
    const { ninjas } = this.props;
    //creating a new array to render in the dom
    const ninjaList = ninjas.map((ninja) => {
      return (
        <div className="ninja" key={ninja.id}>
          <div>name:{ninja.name}</div>
          <div>Age:{ninja.age}</div>
          <div>Belt:{ninja.belt}</div>
        </div>
      );
    });
    return <div className="ninja-list">{ninjaList}</div>;
  }
}

export default Ninjas;
