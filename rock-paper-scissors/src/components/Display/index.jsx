import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button } from 'antd';

import { setChoice } from '../../redux';

const Display = () => {
  const dispatch = useDispatch();
  const { choicePlayer1, choicePlayer2 } = useSelector((state) => state.choice);

  const setCurrentChoice = (e) => {
    const allChoices = ['Paper', 'Rock', 'Scissors'];
    const computer = allChoices[Math.floor(Math.random() * allChoices.length)];
    dispatch(setChoice(e.target.textContent, computer));
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

      {choicePlayer1 ? (
        <div>
          <h3>Player 1 : {choicePlayer1}</h3>
          <h3>Player 2 : {choicePlayer2}</h3>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default Display;
