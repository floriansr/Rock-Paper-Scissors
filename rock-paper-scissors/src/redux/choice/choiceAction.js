import {
  SET_CHOICE,
  SET_COMPUTER_CHOICE,
  REMOVE_CHOICE,
} from 'redux/choice/choiceType';

export const setChoice = (choice) => {
  return {
    type: SET_CHOICE,
    choice,
  };
};

export const setComputerChoice = (choice) => {
  return {
    type: SET_COMPUTER_CHOICE,
    choice,
  };
};

export const removeChoice = () => {
  return {
    type: REMOVE_CHOICE,
  };
};
