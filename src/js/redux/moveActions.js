import {
  INITIATE_MOVE,
  CONFIRM_MOVE,
  CANCEL_MOVE,
  UNDO_MOVE
} from './actionTypes';

export function initiateMove(index) {
  return {
    type: INITIATE_MOVE,
    index
  };
}

export function confirmMove(index) {
  return {
    type: CONFIRM_MOVE,
    index
  };
}

export function cancelMove(index) {
  return {
    type: CANCEL_MOVE,
    index
  };
}

export function undoMove(index) {
  return {
    type: UNDO_MOVE,
    index
  };
}
