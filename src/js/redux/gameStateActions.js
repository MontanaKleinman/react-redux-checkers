import { SWAP, FINISH } from './actionTypes';

export function swap() {
  return { type: SWAP };
}

export function finish() {
  return { type: FINISH };
}
