import React from "react";

const Ninjas = ({ ninjas }) => {
  const ninjaList = ninjas.map((ninja) => {
    return ninja.age > 20 ? (
      <div className="ninja" key={ninja.id}>
        <div>name:{ninja.name}</div>
        <div>Age:{ninja.age}</div>
        <div>Belt:{ninja.belt}</div>
      </div>
    ) : null;
  });
  return <div className="ninja-list">{ninjaList}</div>;
};

export default Ninjas;
