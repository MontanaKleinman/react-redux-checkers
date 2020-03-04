import { GRAB, RELEASE } from './actionTypes';

export function grab() {
  return { type: GRAB };
}

export function release() {
  return { type: RELEASE };
}
