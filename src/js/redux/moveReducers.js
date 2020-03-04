import {
  INITIATE_MOVE,
  CONFIRM_MOVE,
  CANCEL_MOVE,
  UNDO_MOVE
} from './actionTypes';

const initialState = {
  initiate: false,
  finalize: false
};

const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_MOVE:
      return {
        ...state,
        initiate: true
      };
    case CONFIRM_MOVE:
      return {
        ...state,
        finalize: true
      };
    case CANCEL_MOVE:
      return {
        ...state,
        initiate: false
      };
    case UNDO_MOVE:
      return {
        ...state,
        finalize: false
      };
    default:
      return state;
  }
};

export default moveReducer;
