import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Result = () => {
  const dispatch = useDispatch();
  const { scorePlayer1, scorePlayer2 } = useSelector((state) => state.score);

  return (
    <>
      <h3>My score : {scorePlayer1}</h3>
      <h3>His score : {scorePlayer2}</h3>
    </>
  );
};

export default Result;
