import React from 'react';
import Checker from './Checker';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMove, confirmMove } from './redux/moveActions';

function GameSquares(props) {
  const bColor = useSelector(state => state.move.bColor);
  const piece = useSelector(state => state.move.piece);
  const phase = useSelector(state => state.move.phase);
  const target = useSelector(state => state.move.target);
  const player = useSelector(state => state.move.player);
  const dispatch = useDispatch();

  const selectMove = e => {
    if (
      player === 'one' &&
      piece[props.index].color === 'blue' &&
      phase !== 'transfer'
    ) {
      if (e.target.id === `checker${props.index}`) {
        dispatch(initiateMove(props.index));
      }
    } else if (
      player === 'two' &&
      piece[props.index].color === 'yellow' &&
      phase !== 'transfer'
    ) {
      if (e.target.id === `checker${props.index}`) {
        dispatch(initiateMove(props.index));
      }
    } else if (e.target.id === `square${props.index}` && phase !== 'transfer') {
      if (target[props.index] === 'valid') {
        dispatch(confirmMove(props.index));
      }
    } else if (e.target) {
      e.preventDefault();
    }
  };

  return (
    <div
      id={`square${props.index}`}
      className={`${bColor[props.index]} ${target[props.index]} ${
        piece[props.index].active
      }`}
      onClick={selectMove}
    >
      <Checker index={props.index} />
    </div>
  );
}

export default GameSquares;
