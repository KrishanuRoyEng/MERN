import React from "react";

const Intro = () => {
  const element = <h1>Hello, This is an Intro componenet</h1>;
  const name = "Alice";
  const user = { firstName: "John",lastName: "Doe" };
  const greeting = <h1>Hello, {name},{user.firstName} {user.lastName}</h1>;
  const cal=2+2-1*(4/2)+(4*5)-3;
  return <div>
    {element}
    {greeting}
    {2+2}
    {cal}
  </div>;
};

export default Intro;
