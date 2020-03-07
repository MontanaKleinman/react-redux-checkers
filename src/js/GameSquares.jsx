import React from 'react';
import Checker from './Checker';
import { useDispatch, useSelector } from 'react-redux';

function GameSquares(props) {
  const bColor = useSelector(state => state.move.bColor);
  const piece = useSelector(state => state.move.piece);

  return (
    <div
      id={props.index}
      className={`${bColor[props.index]} ${piece[props.index].active}`}
    >
      <Checker index={props.index} />
    </div>
  );
}

export default GameSquares;
