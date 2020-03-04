import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CheckerPiece(props) {
  // const [checkerType, setCheckerType] = useState('');

  // function checkerDetection(event) {
  //   props.setActiveChecker(event.currentTarget.id);
  //   {
  //     props.onClick();
  //   }
  // }

  // useEffect(() => {
  //   if ([1, 3, 5, 7, 8, 10, 12, 14, 17, 19, 21, 23].indexOf(props.index) >= 0) {
  //     setCheckerType('checkerOne');
  //   } else if (
  //     [40, 42, 44, 46, 49, 51, 53, 55, 56, 58, 60, 62].indexOf(props.index) >= 0
  //   ) {
  //     setCheckerType('checkerTwo');
  //   }
  // }, [props.index]);

  return (
    <div
    // id={props.id}
    // onClick={checkerDetection}
    // className={props.active ? `${checkerType} liftedPiece` : checkerType}
    ></div>
  );
}

export default CheckerPiece;
