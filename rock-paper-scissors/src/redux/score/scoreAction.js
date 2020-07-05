import {
  SCORE_PLAYERS,
  INCREMENT_PLAYER,
  REMOVE_SCORE,
} from 'redux/score/scoreType';

export const setScore = (scorePlayer1, scorePlayer2) => {
  return {
    type: SCORE_PLAYERS,
    scorePlayer1,
    scorePlayer2,
  };
};

export const incrementScore = (player) => {
  return {
    type: INCREMENT_PLAYER,
    player,
  };
};

export const removeScore = () => {
  return {
    type: REMOVE_SCORE,
  };
};
