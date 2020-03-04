import { SWAP, FINISH } from './actionTypes';

const initialState = {
  activeP: 'one',
  finish: false
};

const gameStateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWAP:
      return {
        ...state,
        activeP: state.playerActive === 'one' ? 'two' : 'one'
      };
    case FINISH:
      return {
        ...state,
        finish: true
      };
    default:
      return state;
  }
};

export default gameStateReducer;
