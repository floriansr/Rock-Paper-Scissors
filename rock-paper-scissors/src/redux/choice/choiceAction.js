import { SET_CHOICE, REMOVE_CHOICE } from 'redux/choice/choiceType';

export const setChoice = (choicePlayer1, choicePlayer2) => {
  return {
    type: SET_CHOICE,
    choicePlayer1,
    choicePlayer2,
  };
};

export const removeChoice = () => {
  return {
    type: REMOVE_CHOICE,
  };
};
