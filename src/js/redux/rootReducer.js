import { combineReducers } from 'redux';
import moveReducer from './moveReducers';

const rootReducer = combineReducers({
  move: moveReducer
});

export default rootReducer;
