import React from "react";

//lets destrucre in the parameter
const Ninjas = ({ ninjas }) => {
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
};

export default Ninjas;
