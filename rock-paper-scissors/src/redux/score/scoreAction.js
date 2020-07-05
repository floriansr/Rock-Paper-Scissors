import { SCORE_PLAYERS, REMOVE_SCORE } from 'redux/score/scoreType';

export const setScore = (scorePlayer1, scorePlayer2) => {
  return {
    type: SCORE_PLAYERS,
    scorePlayer1,
    scorePlayer2,
  };
};

export const removeScore = () => {
  return {
    type: REMOVE_SCORE,
  };
};
