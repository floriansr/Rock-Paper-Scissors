import { SET_AUTOPLAY, REMOVE_AUTOPLAY } from 'redux/autoplay/autoplayType';

const initialState = {
  autoplay: false,
};

const autoplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTOPLAY:
      return {
        ...state,
        autoplay: true,
      };
    case REMOVE_AUTOPLAY:
      return {
        ...state,
        autoplay: false,
      };
    default:
      return state;
  }
};

export default autoplayReducer;
