import { SCORE_PLAYERS, REMOVE_SCORE } from 'redux/score/scoreType';

const initialState = {
  scorePlayer1: 0,
  scorePlayer2: 0,
};

const choiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SCORE_PLAYERS:
      return {
        ...state,
        scorePlayer1: action.scorePlayer1,
        scorePlayer2: action.scorePlayer2,
      };
    case REMOVE_SCORE:
      return {
        ...state,
        scorePlayer1: 0,
        scorePlayer2: 0,
      };
    default:
      return state;
  }
};

export default choiceReducer;
