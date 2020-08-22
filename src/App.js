import React from "react";
import Ninjas from "./components/Ninjas";
class App extends React.Component {
  state = {};
  render() {
    return (
      <div>
        {/*passing props(properties)*/}
        <Ninjas name="ryu" Age="30" Belt="Black" />
        <Ninjas name="Ajit" Age="20" Belt="orange" />
      </div>
    );
  }
}

export default App;
