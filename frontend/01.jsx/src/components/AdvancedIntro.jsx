import React from 'react';

const AdvancedIntro = () => {
  const name = "Alice";
  const age = 25;
  const isStudent = true;

  const userInfo = (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Birth Year: {2025 - age}</p>
      <p>Is Student: {isStudent? "Yes" : "No"}</p>
    </div>
  );

  return (
    <div>
      <h1>AdvancedIntro</h1>
      {userInfo}
    </div>
  );
};

export default AdvancedIntro;