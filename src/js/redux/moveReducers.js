import {
  INITIATE_MOVE,
  CONFIRM_MOVE,
  FINISH_MOVE,
  CANCEL_MOVE,
  UNDO_MOVE
} from './actionTypes';

const initialState = {
  phase: 'start',
  square: [...Array(64)].map((e, i) => {
    return i;
  }),
  currentSquare: 0,
  row: [...Array(64)].map((e, i) => {
    return Math.floor(i / 8) % 8;
  }),
  corner: [...Array(64)].map((e, i) => {
    switch ((i + 1) % 8) {
      case 1:
        return 'left';
      case 2:
        return 'midLeft';
      case 7:
        return 'midRight';
      case 0:
        return 'right';
      default:
        return '';
    }
  }),
  piece: [...Array(64)].map((e, i) => {
    if (
      ((i % 2 === 0 && Math.floor(i / 8) % 2 === 1) ||
        (i % 2 === 1 && Math.floor(i / 8) % 2 === 0)) &&
      i <= 23
    ) {
      return { color: 'blue', status: 'pawn', active: 'still' };
    } else if (
      ((i % 2 === 0 && Math.floor(i / 8) % 2 === 1) ||
        (i % 2 === 1 && Math.floor(i / 8) % 2 === 0)) &&
      i >= 40
    ) {
      return { color: 'yellow', status: 'pawn', active: 'still' };
    } else {
      return { color: '', status: '', active: '' };
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
    return [i - 7, i - 9, i - 14, i - 18, i + 7, i + 9, i + 14, i + 18];
  }),
  target: [...Array(64)].map((e, i) => {
    return 'invalid';
  }),
  player: 'one',
  gameOver: false
};

const moveReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_MOVE:
      return {
        ...state,
        //CHANGE PIECE STATUS
        piece: state.piece.map((e, i) => {
          if (i === action.index) {
            return { color: e.color, status: e.status, active: 'alive' };
          } else {
            return { color: e.color, status: e.status, active: 'still' };
          }
        }),
        currentSquare: action.index,
        //CHANGE TARGET STATUS
        target: state.target.map((e, i) => {
          //BLUE CHECKER LOGIC
          if (state.piece[action.index].color === 'blue') {
            //PAWN LOGIC
            if (state.piece[action.index].status === 'pawn') {
              //LEFT LOGIC
              if (state.corner[action.index] === 'left') {
                if (
                  state.next[action.index].includes(i) &&
                  i > action.index &&
                  i !== action.index + 7 &&
                  i !== action.index + 14
                ) {
                  if (
                    i === action.index + 9 &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index + 18 &&
                    state.piece[i - 9].color !== 'blue' &&
                    state.piece[i - 9].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDLEFT LOGIC
              else if (state.corner[action.index] === 'midLeft') {
                if (
                  state.next[action.index].includes(i) &&
                  i > action.index &&
                  i !== action.index + 14
                ) {
                  if (
                    (i === action.index + 7 || i === action.index + 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index + 18 &&
                    state.piece[i - 9].color !== 'blue' &&
                    state.piece[i - 9].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDRIGHT LOGIC
              else if (state.corner[action.index] === 'midRight') {
                if (
                  state.next[action.index].includes(i) &&
                  i > action.index &&
                  i !== action.index + 18
                ) {
                  if (
                    (i === action.index + 7 || i === action.index + 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index + 14 &&
                    state.piece[i - 7].color !== 'blue' &&
                    state.piece[i - 7].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //RIGHT LOGIC
              else if (state.corner[action.index] === 'right') {
                if (
                  state.next[action.index].includes(i) &&
                  i > action.index &&
                  i !== action.index + 9 &&
                  i !== action.index + 18
                ) {
                  if (
                    i === action.index + 7 &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index + 14 &&
                    state.piece[i - 7].color !== 'blue' &&
                    state.piece[i - 7].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDDLE LOGIC
              else {
                if (state.next[action.index].includes(i) && i > action.index) {
                  if (
                    (i === action.index + 7 || i === action.index + 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index + 14 &&
                      state.piece[i - 7].color !== 'blue' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 18 &&
                      state.piece[i - 9].color !== 'blue' &&
                      state.piece[i - 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
            }

            //KING LOGIC
            if (state.piece[action.index].status === 'king') {
              //LEFT LOGIC
              if (state.corner[action.index] === 'left') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index - 7 &&
                  i !== action.index - 14 &&
                  i !== action.index + 7 &&
                  i !== action.index + 14
                ) {
                  if (
                    (i === action.index - 9 || i === action.index + 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 18 &&
                      state.piece[i + 9].color !== 'blue' &&
                      state.piece[i + 9].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 18 &&
                      state.piece[i - 9].color !== 'blue' &&
                      state.piece[i - 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDLEFT LOGIC
              else if (state.corner[action.index] === 'midLeft') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index + 14 &&
                  i !== action.index - 14
                ) {
                  if (
                    (i === action.index - 7 ||
                      i === action.index + 7 ||
                      i === action.index + 9 ||
                      i === action.index - 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    ((i === action.index - 18 || i === action.index + 18) &&
                      state.piece[i - 9].color !== 'blue' &&
                      state.piece[i - 9].color !== '' &&
                      state.piece[i].color === '') ||
                    (state.piece[i + 9].color !== 'blue' &&
                      state.piece[i + 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDRIGHT LOGIC
              else if (state.corner[action.index] === 'midRight') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index + 18 &&
                  i !== action.index - 18
                ) {
                  if (
                    (i === action.index - 7 ||
                      i === action.index + 7 ||
                      i === action.index + 9 ||
                      i === action.index - 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    ((i === action.index - 14 || i === action.index + 14) &&
                      state.piece[i - 7].color !== 'blue' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (state.piece[i + 7].color !== 'blue' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //RIGHT LOGIC
              else if (state.corner[action.index] === 'right') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index - 9 &&
                  i !== action.index - 18 &&
                  i !== action.index + 9 &&
                  i !== action.index + 18
                ) {
                  if (
                    (i === action.index - 7 || i === action.index + 7) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 14 &&
                      state.piece[i + 7].color !== 'blue' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 14 &&
                      state.piece[i - 7].color !== 'blue' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDDLE LOGIC
              else {
                if (state.next[action.index].includes(i)) {
                  if (
                    (i === action.index - 7 ||
                      i === action.index + 7 ||
                      i === action.index - 9 ||
                      i === action.index + 9) &&
                    state.piece[i].color !== 'blue' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 14 &&
                      state.piece[i + 7].color !== 'blue' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 14 &&
                      state.piece[i - 7].color !== 'blue' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index - 18 &&
                      state.piece[i + 9].color !== 'blue' &&
                      state.piece[i + 9].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 18 &&
                      state.piece[i - 9].color !== 'blue' &&
                      state.piece[i - 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
            }
          }

          //YELLOW CHECKER LOGIC
          if (state.piece[action.index].color === 'yellow') {
            //PAWN LOGIC
            if (state.piece[action.index].status === 'pawn') {
              //LEFT LOGIC
              if (state.corner[action.index] === 'left') {
                if (
                  state.next[action.index].includes(i) &&
                  i < action.index &&
                  i !== action.index - 9 &&
                  i !== action.index - 18
                ) {
                  if (
                    i === action.index - 7 &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index - 18 &&
                    state.piece[i + 9].color !== 'yellow' &&
                    state.piece[i + 9].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDLEFT LOGIC
              else if (state.corner[action.index] === 'midLeft') {
                if (
                  state.next[action.index].includes(i) &&
                  i < action.index &&
                  i !== action.index - 18
                ) {
                  if (
                    (i === action.index - 7 || i === action.index - 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index - 14 &&
                    state.piece[i + 7].color !== 'yellow' &&
                    state.piece[i + 7].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDRIGHT LOGIC
              else if (state.corner[action.index] === 'midRight') {
                if (
                  state.next[action.index].includes(i) &&
                  i < action.index &&
                  i !== action.index - 14
                ) {
                  if (
                    (i === action.index - 7 || i === action.index - 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index - 18 &&
                    state.piece[i + 9].color !== 'yellow' &&
                    state.piece[i + 9].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //RIGHT LOGIC
              else if (state.corner[action.index] === 'right') {
                if (
                  state.next[action.index].includes(i) &&
                  i < action.index &&
                  i !== action.index - 7 &&
                  i !== action.index - 14
                ) {
                  if (
                    i === action.index - 9 &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    i === action.index - 18 &&
                    state.piece[i + 9].color !== 'yellow' &&
                    state.piece[i + 9].color !== '' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDDLE LOGIC
              else {
                if (state.next[action.index].includes(i) && i < action.index) {
                  if (
                    (i === action.index - 7 || i === action.index - 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 14 &&
                      state.piece[i + 7].color !== 'yellow' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index - 18 &&
                      state.piece[i + 9].color !== 'yellow' &&
                      state.piece[i + 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
            }

            // KING LOGIC
            if (state.piece[action.index].status === 'king') {
              //LEFT LOGIC
              if (state.corner[action.index] === 'left') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index - 9 &&
                  i !== action.index - 18 &&
                  i !== action.index + 9 &&
                  i !== action.index + 18
                ) {
                  if (
                    (i === action.index - 7 || i === action.index + 7) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue' &&
                    state.piece[i].color === ''
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 14 &&
                      state.piece[i + 7].color !== 'yellow' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 14 &&
                      state.piece[i - 7].color !== 'yellow' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDLEFT LOGIC
              else if (state.corner[action.index] === 'midLeft') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index + 18 &&
                  i !== action.index - 18
                ) {
                  if (
                    (i === action.index - 7 ||
                      i === action.index + 7 ||
                      i === action.index + 9 ||
                      i === action.index - 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    ((i === action.index - 14 || i === action.index + 14) &&
                      state.piece[i - 7].color !== 'yellow' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (state.piece[i + 7].color !== 'yellow' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDRIGHT LOGIC
              else if (state.corner[action.index] === 'midRight') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index + 14 &&
                  i !== action.index - 14
                ) {
                  if (
                    (i === action.index - 7 ||
                      i === action.index + 7 ||
                      i === action.index + 9 ||
                      i === action.index - 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    ((i === action.index - 18 || i === action.index + 18) &&
                      state.piece[i - 7].color !== 'yellow' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (state.piece[i + 7].color !== 'yellow' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //RIGHT LOGIC
              else if (state.corner[action.index] === 'right') {
                if (
                  state.next[action.index].includes(i) &&
                  i !== action.index - 7 &&
                  i !== action.index - 14 &&
                  i !== action.index + 7 &&
                  i !== action.index + 14
                ) {
                  if (
                    (i === action.index - 9 || i === action.index + 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 18 &&
                      state.piece[i + 9].color !== 'yellow' &&
                      state.piece[i + 9].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 18 &&
                      state.piece[i - 9].color !== 'yellow' &&
                      state.piece[i - 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
              //MIDDLE LOGIC
              else {
                if (state.next[action.index].includes(i)) {
                  if (
                    (i === action.index - 7 ||
                      i === action.index + 7 ||
                      i === action.index - 9 ||
                      i === action.index + 9) &&
                    state.piece[i].color !== 'yellow' &&
                    state.phase !== 'continue'
                  ) {
                    return 'valid';
                  } else if (
                    (i === action.index - 14 &&
                      state.piece[i + 7].color !== 'yellow' &&
                      state.piece[i + 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 14 &&
                      state.piece[i - 7].color !== 'yellow' &&
                      state.piece[i - 7].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index - 18 &&
                      state.piece[i + 9].color !== 'yellow' &&
                      state.piece[i + 9].color !== '' &&
                      state.piece[i].color === '') ||
                    (i === action.index + 18 &&
                      state.piece[i - 9].color !== 'yellow' &&
                      state.piece[i - 9].color !== '' &&
                      state.piece[i].color === '')
                  ) {
                    return 'valid';
                  } else {
                    return 'invalid';
                  }
                }
              }
            }
          }
        })
      };
    case CONFIRM_MOVE:
      return {
        ...state,
        piece: state.piece.map((e, i) => {
          if (
            i === action.index &&
            state.next[state.currentSquare].includes(i)
          ) {
            if (
              (i === action.index && state.row[action.index] === 0) ||
              state.row[action.index] === 7
            ) {
              return {
                color: state.piece[state.currentSquare].color,
                status: 'king',
                active: 'still'
              };
            } else {
              return {
                color: state.piece[state.currentSquare].color,
                status: 'pawn',
                active: 'still'
              };
            }
          } else if (
            (i === action.index + 7 &&
              action.index === state.currentSquare - 14) ||
            (i === action.index - 7 &&
              action.index === state.currentSquare + 14) ||
            (i === action.index + 9 &&
              action.index === state.currentSquare - 18) ||
            (i === action.index - 9 &&
              action.index === state.currentSquare + 18)
          ) {
            return {
              color: '',
              status: '',
              active: ''
            };
          } else if (i === state.currentSquare) {
            return {
              color: '',
              status: '',
              active: ''
            };
          } else {
            return { color: e.color, status: e.status, active: 'still' };
          }
        }),
        phase:
          action.index === state.currentSquare - 14 ||
          action.index === state.currentSquare + 14 ||
          action.index === state.currentSquare - 18 ||
          action.index === state.currentSquare + 18
            ? 'continue'
            : 'transfer',
        target: [...Array(64)].map((e, i) => {
          return 'invalid';
        })
      };
    case FINISH_MOVE:
      return {
        ...state,
        player: state.player === 'one' ? 'two' : 'one',
        finish: state.piece.includes('blue')
          ? state.piece.includes('yellow')
            ? false
            : 'oneWin'
          : 'twoWin',
        phase: 'start',
        currentSquare: action.index
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
