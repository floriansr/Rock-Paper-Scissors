import React from 'react';
import { useSelector } from 'react-redux';
import EndingGame from 'tools/EndingGame';

const Result = () => {
  const { scorePlayer1, scorePlayer2 } = useSelector((state) => state.score);

  return (
    <>
      <h3>Player 1 : {scorePlayer1}</h3>
      <h3>Player 2 : {scorePlayer2}</h3>
      {scorePlayer1 >= 3 || scorePlayer2 >= 3 ? <EndingGame /> : ''}
    </>
  );
};

export default Result;
