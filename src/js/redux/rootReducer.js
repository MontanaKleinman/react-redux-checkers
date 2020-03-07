import { combineReducers } from 'redux';
import gameStateReducer from './gameStateReducers';
import moveReducer from './moveReducers';

const rootReducer = combineReducers({
  gameState: gameStateReducer,
  move: moveReducer
});

export default rootReducer;
