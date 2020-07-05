import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import choiceReducer from 'redux/choice/choiceReducer';
import scoreReducer from 'redux/score/scoreReducer';

const rootReducer = combineReducers({
  choice: choiceReducer,
  score: scoreReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export default store;
