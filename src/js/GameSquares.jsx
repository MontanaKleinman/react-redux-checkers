import React, { useState, useEffect } from 'react';
import CheckerPiece from './CheckerPiece';
import { useDispatch, useSelector } from 'react-redux';

function GameSquares(props) {
  // const [squareColor, setSquareColor] = useState('');

  // function squareDetection(event) {
  //   props.setActiveSquare(event.currentTarget.id);
  // }

  function checkerId(i) {
    if (i === 1) {
      return '1A';
    } else if (i === 3) {
      return '2A';
    } else if (i === 5) {
      return '3A';
    } else if (i === 7) {
      return '4A';
    } else if (i === 8) {
      return '5A';
    } else if (i === 10) {
      return '6A';
    } else if (i === 12) {
      return '7A';
    } else if (i === 14) {
      return '8A';
    } else if (i === 17) {
      return '9A';
    } else if (i === 19) {
      return '10A';
    } else if (i === 21) {
      return '11A';
    } else if (i === 23) {
      return '12A';
    } else if (i === 40) {
      return '1B';
    } else if (i === 42) {
      return '2B';
    } else if (i === 44) {
      return '3B';
    } else if (i === 46) {
      return '4B';
    } else if (i === 49) {
      return '5B';
    } else if (i === 51) {
      return '6B';
    } else if (i === 53) {
      return '7B';
    } else if (i === 55) {
      return '8B';
    } else if (i === 56) {
      return '9B';
    } else if (i === 58) {
      return '10B';
    } else if (i === 60) {
      return '11B';
    } else if (i === 62) {
      return '12B';
    }
  }

  // useEffect(() => {
  //   const evenRow = Math.floor(props.index / 8);
  //   if (evenRow === 0 || evenRow === 2 || evenRow === 4 || evenRow === 6) {
  //     if (props.index % 2 === 0) {
  //       setSquareColor('squareColorOne');
  //     } else {
  //       setSquareColor('squareColorTwo');
  //     }
  //   } else {
  //     if (props.index % 2 === 0) {
  //       setSquareColor('squareColorTwo');
  //     } else {
  //       setSquareColor('squareColorOne');
  //     }
  //   }
  // }, [props.index, props.checkerCount]);

  return (
    <div id={props.index} className={squareColor} onClick={squareDetection}>
      <CheckerPiece
      // index={props.index}
      // activeSquare={props.activeSquare}
      // activeChecker={props.activeChecker}
      // setActiveChecker={props.setActiveChecker}
      // target={props.target}
      // setTarget={props.setTarget}
      // id={checkerId(props.index)}
      // active={props.active}
      // onClick={props.onClick}
      />
    </div>
  );
}

export default GameSquares;
