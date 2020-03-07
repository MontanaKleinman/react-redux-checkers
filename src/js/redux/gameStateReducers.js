import { SWAP, FINISH } from './actionTypes';

const gameStateReducer = (state = [], action) => {
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
