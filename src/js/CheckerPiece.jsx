// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { grab } from './redux/checkerActions';

// function CheckerPiece(props) {
//   const squareLocation = useSelector(state => state.checker.squareLocation);
//   const rowLocation = useSelector(state => state.checker.rowLocation);
//   const cornerLocation = useSelector(state => state.checker.cornerLocation);
//   const color = useSelector(state => state.checker.color);
//   const nextLocation = useSelector(state => state.checker.nextLocation);
//   const dispatch = useDispatch();

//   const grabEvent = event => {
//     dispatch(grab(event.target.id, props.color));
//   };

//   const grabChecker = () => {
//     if (squareLocation === props.index) {
//       return 'liftedPiece';
//     } else {
//       return '';
//     }
//   };

//   const locationMoveable = (
//     color,
//     nextLocation,
//     squareLocation,
//     rowLocation,
//     cornerLocation
//   ) => {
//     if (color === 'checkerOne') {
//       if (rowLocation % 2 === 0) {
//         if (cornerLocation === 'true') {
//           if (
//             props.index === `${nextLocation[6]}.${squareLocation}` &&
//             props.color === 'checkerNull'
//           ) {
//             return 'possibleTarget';
//           }
//         } else {
//           if (
//             (props.index === `${nextLocation[6]}.${squareLocation}` &&
//               props.color === 'checkerNull') ||
//             (props.index === `${nextLocation[7]}.${squareLocation}` &&
//               props.color === 'checkerNull')
//           ) {
//             return 'possibleTarget';
//           }
//         }
//       } else {
//         if (cornerLocation === 'true') {
//           if (
//             props.index === `${nextLocation[6]}.${squareLocation}` &&
//             props.color === 'checkerNull'
//           ) {
//             return 'possibleTarget';
//           }
//         } else {
//           if (
//             (props.index === `${nextLocation[5]}.${squareLocation}` &&
//               props.color === 'checkerNull') ||
//             (props.index === `${nextLocation[6]}.${squareLocation}` &&
//               props.color === 'checkerNull')
//           ) {
//             return 'possibleTarget';
//           }
//         }
//       }
//     } else if (color === 'checkerTwo') {
//       if (rowLocation % 2 === 0) {
//         if (cornerLocation === 'true') {
//           if (
//             props.index === `${nextLocation[1]}.${squareLocation}` &&
//             props.color === 'checkerNull'
//           ) {
//             return 'possibleTarget';
//           }
//         } else {
//           if (
//             (props.index === `${nextLocation[0]}.${squareLocation}` &&
//               props.color === 'checkerNull') ||
//             (props.index === `${nextLocation[1]}.${squareLocation}` &&
//               props.color === 'checkerNull')
//           ) {
//             return 'possibleTarget';
//           }
//         }
//       } else {
//         if (cornerLocation === 'true') {
//           if (
//             props.index === `${nextLocation[1]}.${squareLocation}` &&
//             props.color === 'checkerNull'
//           ) {
//             return 'possibleTarget';
//           }
//         } else {
//           if (
//             (props.index === `${nextLocation[1]}.${squareLocation}` &&
//               props.color === 'checkerNull') ||
//             (props.index === `${nextLocation[2]}.${squareLocation}` &&
//               props.color === 'checkerNull')
//           ) {
//             return 'possibleTarget';
//           }
//         }
//       }
//     } else {
//       return '';
//     }
//   };

//   return (
//     <div
//       id={props.index}
//       className={`${grabChecker()} ${props.color} ${locationMoveable()}`}
//       onClick={grabEvent}
//     ></div>
//   );
// }

// export default CheckerPiece;
