import { GRAB, RELEASE } from './actionTypes';

const initialState = {
  active: false
};

const checkerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GRAB:
      return {
        ...state,
        active: true
      };
    case RELEASE:
      return {
        ...state,
        active: false
      };
    default:
      return state;
  }
};

export default checkerReducer;
