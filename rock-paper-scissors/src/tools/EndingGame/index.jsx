import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Result, Button } from 'antd';

import { removeChoice, removeScore, removeAutoplay } from '../../redux';

const EndingGame = () => {
  const { scorePlayer1, scorePlayer2 } = useSelector((state) => state.score);
  const dispatch = useDispatch();

  const newGame = () => {
    dispatch(removeChoice());
    dispatch(removeScore());
    dispatch(removeAutoplay());
  };

  return (
    <>
      <Result
        status={scorePlayer1 > scorePlayer2 ? 'success' : 'error'}
        title={
          scorePlayer1 > scorePlayer2
            ? 'Player 1 win this game'
            : 'Player 2 win this game'
        }
        subTitle={`Player 1 : ${scorePlayer1} / Player 2 : ${scorePlayer2}`}
        extra={[
          <Button type="primary" key="newgame" onClick={newGame}>
            New Game
          </Button>,
        ]}
      />
    </>
  );
};

export default EndingGame;
