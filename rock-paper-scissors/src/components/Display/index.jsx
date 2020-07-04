import React, { useState } from 'react';

import { Button } from 'antd';

const Display = () => {
  const [choice, setChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const setCurrentChoice = (e) => {
    // console.log('setChoice -> choice', e.target.textContent);
    setChoice(e.target.textContent);

    const allChoices = ['paper', 'rock', 'scissors'];
    const computer = allChoices[Math.floor(Math.random() * allChoices.length)];
    // console.log('setCurrentChoice -> computer', computer);
    setComputerChoice(computer);
  };

  return (
    <>
      <Button type="primary" onClick={(e) => setCurrentChoice(e)}>
        Rock
      </Button>
      <Button type="primary" onClick={(e) => setCurrentChoice(e)}>
        Paper
      </Button>
      <Button type="primary" onClick={(e) => setCurrentChoice(e)}>
        Scissors
      </Button>

      {choice ? (
        <div>
          <h3>My current choice : {choice}</h3>
          <h3>Computer choice : {computerChoice}</h3>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Display;
