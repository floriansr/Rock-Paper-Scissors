import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import choiceReducer from 'redux/choice/choiceReducer';
import scoreReducer from 'redux/score/scoreReducer';
import autoplayReducer from 'redux/autoplay/autoplayReducer';

const rootReducer = combineReducers({
  choice: choiceReducer,
  score: scoreReducer,
  autoplay: autoplayReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
