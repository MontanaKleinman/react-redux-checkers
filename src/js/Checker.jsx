import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initiateMove } from './redux/moveActions';

function CheckerPiece(props) {
  const piece = useSelector(state => state.move.piece);

  return (
    <div
      id={`checker${props.index}`}
      className={`${piece[props.index].color}`}
    ></div>
  );
}

export default CheckerPiece;
