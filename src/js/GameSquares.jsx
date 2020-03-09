import React from 'react';
import Checker from './Checker';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMove, confirmMove } from './redux/moveActions';

function GameSquares(props) {
  const bColor = useSelector(state => state.move.bColor);
  const piece = useSelector(state => state.move.piece);
  const currentSquare = useSelector(state => state.move.currentSquare);
  const target = useSelector(state => state.move.target);
  const player = useSelector(state => state.move.player);
  const dispatch = useDispatch();

  const selectMove = e => {
    if (player === 'one' && piece[props.index].color === 'blue') {
      if (e.target.id === `checker${props.index}`) {
        dispatch(initiateMove(props.index));
      }
    } else {
      e.preventDefault();
    }
    if (player === 'two' && piece[props.index].color === 'yellow') {
      if (e.target.id === `checker${props.index}`) {
        dispatch(initiateMove(props.index));
      }
    } else {
      e.preventDefault();
    }
    if (e.target.id === `square${props.index}`) {
      dispatch(confirmMove(props.index));
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
