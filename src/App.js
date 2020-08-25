import React, { Component } from "react";
import Ninjas from "./components/Ninjas";
import AddNinja from "./components/AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };
  addNinja = (
    /*this is where input will be stored from AddNinja.js*/ ninja
  ) => {
    ninja.id = Math.random(); //to give every input an unique id
    let ninjas = [...this.state.ninjas, ninja]; //creating a copy of ninjas and adding input(... is a spread operator)
    this.setState({
      ninjas: ninjas,
    });
  };
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
