import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, message } from 'antd';

import { setChoice } from '../../redux';

const Display = () => {
  const dispatch = useDispatch();
  const { choicePlayer1, choicePlayer2 } = useSelector((state) => state.choice);

  const compareChoice = (player1, player2) => {
    // DRAW
    if (player1 === player2) return message.warning('This is a draw');

    // PLAYER 1 WIN
    if (player1 === 'Scissors' && player2 === 'Paper')
      return message.success('Player 1 win !', 3);

    if (player1 === 'Rock' && player2 === 'Scissors')
      return message.success('Player 1 win !', 3);

    if (player1 === 'Paper' && player2 === 'Rock')
      return message.success('Player 1 win !', 3);

    // PLAYER 2 WIN

    if (player2 === 'Paper' && player1 === 'Rock')
      return message.error('Player 2 win !', 3);

    if (player2 === 'Rock' && player1 === 'Scissors')
      return message.error('Player 2 win !', 3);

    if (player2 === 'Scissors' && player1 === 'Paper')
      return message.error('Player 2 win !', 3);
  };

  const setCurrentChoice = (e) => {
    const allChoices = ['Rock', 'Paper', 'Scissors'];
    const computer = allChoices[Math.floor(Math.random() * allChoices.length)];
    dispatch(setChoice(e.target.textContent, computer));
    compareChoice(e.target.textContent, computer);
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
