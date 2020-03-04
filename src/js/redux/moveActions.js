import {
  INITIATE_MOVE,
  CONFIRM_MOVE,
  CANCEL_MOVE,
  UNDO_MOVE
} from './actionTypes';

export function initiateMove() {
  return {
    type: INITIATE_MOVE
  };
}

export function confirmMove() {
  return {
    type: CONFIRM_MOVE
  };
}

export function cancelMove() {
  return {
    type: CANCEL_MOVE
  };
}

export function undoMove() {
  return {
    type: UNDO_MOVE
  };
}
