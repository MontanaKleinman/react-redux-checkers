import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMove } from './redux/moveActions';

function CheckerPiece(props) {
  const piece = useSelector(state => state.move.piece);
  const dispatch = useDispatch();

  return (
    <div
      className={`${piece[props.index].color}`}
      onClick={() => dispatch(initiateMove(props.index))}
    ></div>
  );
}

export default CheckerPiece;
