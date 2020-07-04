import React, { useState } from 'react';

const Result = () => {
  const [myScore, setMyScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  return (
    <>
      <h3>My score : {myScore}</h3>
      <h3>His score : {computerScore}</h3>
    </>
  );
};

export default Result;
