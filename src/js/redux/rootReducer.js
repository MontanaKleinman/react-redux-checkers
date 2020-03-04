import { combineReducers } from 'redux';
import checkerReducer from './checkerReducers';
import gameStateReducer from './gameStateReducers';
import moveReducer from './moveReducers';

const rootReducer = combineReducers({
  checker: checkerReducer,
  gameState: gameStateReducer,
  move: moveReducer
});

export default rootReducer;
