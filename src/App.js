import React from "react";
import Ninjas from "./components/Ninjas";
class App extends React.Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 30, belt: "black", id: 1 },
      { name: "Yoshi", age: 20, belt: "green", id: 2 },
      { name: "Crystal", age: 25, belt: "pink", id: 3 },
    ],
  };
  render() {
    return (
      <div>
        {/*passing props(properties)*/}
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
