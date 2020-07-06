import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Button, message } from 'antd';
import EndingGame from 'tools/EndingGame';

import { setChoice, setAutoplay, incrementScore } from '../../redux';

const Display = () => {
  const dispatch = useDispatch();
  const { choicePlayer1, choicePlayer2 } = useSelector((state) => state.choice);

  const { scorePlayer1, scorePlayer2 } = useSelector((state) => state.score);
  const { autoplay } = useSelector((state) => state.autoplay);

  const compareChoice = (player1, player2) => {
    // DRAW
    if (player1 === player2) return message.warning('This is a tie');

    // PLAYER 1 WIN
    if (player1 === 'Scissors' && player2 === 'Paper')
      return (
        message.success('Player 1 win !', 3) && dispatch(incrementScore(1))
      );

    if (player1 === 'Rock' && player2 === 'Scissors')
      return (
        message.success('Player 1 win !', 3) && dispatch(incrementScore(1))
      );

    if (player1 === 'Paper' && player2 === 'Rock')
      return (
        message.success('Player 1 win !', 3) && dispatch(incrementScore(1))
      );

    // PLAYER 2 WIN

    if (player2 === 'Paper' && player1 === 'Rock')
      return message.error('Player 2 win !', 3) && dispatch(incrementScore(2));

    if (player2 === 'Rock' && player1 === 'Scissors')
      return message.error('Player 2 win !', 3) && dispatch(incrementScore(2));

    if (player2 === 'Scissors' && player1 === 'Paper')
      return message.error('Player 2 win !', 3) && dispatch(incrementScore(2));
  };

  const computerPlay = (n, p) => {
    if (n === 3 || p === 3) return false;
    const allChoices = ['Rock', 'Paper', 'Scissors'];
    const computer1 = allChoices[Math.floor(Math.random() * allChoices.length)];
    const computer2 = allChoices[Math.floor(Math.random() * allChoices.length)];

    dispatch(setChoice(computer1, computer2));
    compareChoice(computer1, computer2);
  };

  const setCurrentChoice = (e) => {
    if (scorePlayer1 === 3 || scorePlayer2 === 3) return false;
    const allChoices = ['Rock', 'Paper', 'Scissors'];
    const computer = allChoices[Math.floor(Math.random() * allChoices.length)];
    dispatch(setChoice(e.target.textContent, computer));
    compareChoice(e.target.textContent, computer);
  };

  const autoPlay = () => {
    dispatch(setAutoplay());
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
      <Button type="primary" onClick={autoPlay}>
        Computer vs computer
      </Button>

      {choicePlayer1 ? (
        <div>
          <h3>Player 1 : {choicePlayer1}</h3>
          <h3>Player 2 : {choicePlayer2}</h3>
        </div>
      ) : (
        ''
      )}

      <h3>Player 1 : {scorePlayer1}</h3>
      <h3>Player 2 : {scorePlayer2}</h3>
      {scorePlayer1 >= 3 || scorePlayer2 >= 3 ? <EndingGame /> : ''}

      {autoplay && (scorePlayer2 !== 3 || scorePlayer1 !== 3)
        ? computerPlay(scorePlayer1, scorePlayer2)
        : ''}
    </>
  );
};

export default Display;
