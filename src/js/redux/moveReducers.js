import {
  INITIATE_MOVE,
  CONFIRM_MOVE,
  CANCEL_MOVE,
  UNDO_MOVE
} from './actionTypes';

const initialState = {
  square: [...Array(64)].map((e, i) => {
    return i;
  }),
  row: [...Array(64)].map((e, i) => {
    return Math.floor(i / 8) % 8;
  }),
  corner: [...Array(64)].map((e, i) => {
    return i % 7 === 0 || i % 8 === 0 ? true : false;
  }),
  piece: [...Array(64)].map((e, i) => {
    if (
      ((i % 2 === 0 && Math.floor(i / 8) % 2 === 1) ||
        (i % 2 === 1 && Math.floor(i / 8) % 2 === 0)) &&
      i <= 23
    ) {
      return { color: 'blue', status: 'pawn', active: false };
    } else if (
      ((i % 2 === 0 && Math.floor(i / 8) % 2 === 1) ||
        (i % 2 === 1 && Math.floor(i / 8) % 2 === 0)) &&
      i >= 40
    ) {
      return { color: 'yellow', status: 'pawn', active: false };
    } else {
      return '';
    }
  }),
  bColor: [...Array(64)].map((e, i) => {
    if (
      (i % 2 === 0 && Math.floor(i / 8) % 2 === 0) ||
      (i % 2 === 1 && Math.floor(i / 8) % 2 === 1)
    ) {
      return 'white';
    } else {
      return 'black';
    }
  }),
  next: [...Array(64)].map((e, i) => {
    return [
      i - 3,
      i - 4,
      i - 5,
      i - 7,
      i - 9,
      i + 3,
      i + 4,
      i + 5,
      i + 7,
      i + 9
    ];
  })
};

const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_MOVE:
      return {
        ...state,
        piece: state.piece.map((e, i) => {
          if (i === action.index) {
            return { color: e.color, status: e.status, active: 'alive' };
          } else {
            return { color: e.color, status: e.status, active: '' };
          }
        })
      };
    case CONFIRM_MOVE:
      return {
        ...state
      };
    case CANCEL_MOVE:
      return {};
    case UNDO_MOVE:
      return {};
    default:
      return state;
  }
};

export default moveReducer;
