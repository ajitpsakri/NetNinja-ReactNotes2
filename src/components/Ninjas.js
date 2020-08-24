import React from "react";
import AddNinja from "./AddNinja";
const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map((ninja) => {
    return (
      <div className="ninja" key={ninja.id}>
        <div>name:{ninja.name}</div>
        <div>Age:{ninja.age}</div>
        <div>Belt:{ninja.belt}</div>
      </div>
    );
  });
  return (
    <div className="ninja-list">
      {ninjaList}
      <AddNinja />
    </div>
  );
};

export default Ninjas;
