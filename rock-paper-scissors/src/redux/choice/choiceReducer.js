import { SET_CHOICE, REMOVE_CHOICE } from 'redux/choice/choiceType';

const initialState = {
  choicePlayer1: null,
  choicePlayer2: null,
};

const choiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOICE:
      return {
        ...state,
        choicePlayer1: action.choicePlayer1,
        choicePlayer2: action.choicePlayer2,
      };
    case REMOVE_CHOICE:
      return {
        ...state,
        choicePlayer1: null,
        choicePlayer2: null,
      };
    default:
      return state;
  }
};

export default choiceReducer;
