import {
  SET_CHOICE,
  SET_COMPUTER_CHOICE,
  REMOVE_CHOICE,
} from 'redux/choice/choiceType';

const initialState = {
  choice: null,
  computerChoice: null,
};

const choiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHOICE:
      return {
        ...state,
        choice: action.choice,
      };
    case SET_COMPUTER_CHOICE:
      return {
        ...state,
        computerChoice: action.choice,
      };
    case REMOVE_CHOICE:
      return {
        ...state,
        choice: null,
      };
    default:
      return state;
  }
};

export default choiceReducer;
