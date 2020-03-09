import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishMove } from './redux/moveActions';

function CheckerPiece(props) {
  const player = useSelector(state => state.move.player);
  const piece = useSelector(state => state.move.piece);
  const dispatch = useDispatch();

  return (
    <div className="infoBox">
      <div className="infoSection">PLAYER {props.index.toUpperCase()}</div>
      <div className="infoSection">
        <p className={player === props.index ? 'turnOn' : 'turnOff'}>ACTIVE</p>
      </div>
      <div className="infoSection">
        <p>
          # PAWNS:{' '}
          {props.index === 'one'
            ? piece.filter(x => x.color === 'blue').length
            : piece.filter(x => x.color === 'yellow').length}
        </p>
      </div>
      <div className="infoSection">
        <p># PAWNS: {}</p>
      </div>
      <button
        className="infoSection"
        onClick={e =>
          player === props.index ? dispatch(finishMove()) : e.preventDefault
        }
      >
        <p>END TURN</p>
      </button>
    </div>
  );
}

export default CheckerPiece;
