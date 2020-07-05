import {
  SCORE_PLAYERS,
  INCREMENT_PLAYER,
  REMOVE_SCORE,
} from 'redux/score/scoreType';

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
    case INCREMENT_PLAYER:
      if (action.player === 1)
        return {
          ...state,
          scorePlayer1: state.scorePlayer1 + 1,
        };
      if (action.player === 2)
        return {
          ...state,
          scorePlayer2: state.scorePlayer2 + 1,
        };
      break;
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
