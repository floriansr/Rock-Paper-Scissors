import { SET_AUTOPLAY, REMOVE_AUTOPLAY } from 'redux/autoplay/autoplayType';

export const setAutoplay = () => {
  return {
    type: SET_AUTOPLAY,
  };
};

export const removeAutoplay = () => {
  return {
    type: REMOVE_AUTOPLAY,
  };
};
