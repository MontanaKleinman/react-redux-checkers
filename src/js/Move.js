const locationMoveable = (
  color,
  nextLocation,
  squareLocation,
  rowLocation,
  cornerLocation
) => {
  if (color === 'checkerOne') {
    if (rowLocation % 2 === 0) {
      if (cornerLocation === 'true') {
        if (
          props.index === `${nextLocation[6]}.${squareLocation}` &&
          props.color === 'checkerNull'
        ) {
          return 'possibleTarget';
        }
      } else {
        if (
          (props.index === `${nextLocation[6]}.${squareLocation}` &&
            props.color === 'checkerNull') ||
          (props.index === `${nextLocation[7]}.${squareLocation}` &&
            props.color === 'checkerNull')
        ) {
          return 'possibleTarget';
        }
      }
    } else {
      if (cornerLocation === 'true') {
        if (
          props.index === `${nextLocation[6]}.${squareLocation}` &&
          props.color === 'checkerNull'
        ) {
          return 'possibleTarget';
        }
      } else {
        if (
          (props.index === `${nextLocation[5]}.${squareLocation}` &&
            props.color === 'checkerNull') ||
          (props.index === `${nextLocation[6]}.${squareLocation}` &&
            props.color === 'checkerNull')
        ) {
          return 'possibleTarget';
        }
      }
    }
  } else if (color === 'checkerTwo') {
    if (rowLocation % 2 === 0) {
      if (cornerLocation === 'true') {
        if (
          props.index === `${nextLocation[1]}.${squareLocation}` &&
          props.color === 'checkerNull'
        ) {
          return 'possibleTarget';
        }
      } else {
        if (
          (props.index === `${nextLocation[0]}.${squareLocation}` &&
            props.color === 'checkerNull') ||
          (props.index === `${nextLocation[1]}.${squareLocation}` &&
            props.color === 'checkerNull')
        ) {
          return 'possibleTarget';
        }
      }
    } else {
      if (cornerLocation === 'true') {
        if (
          props.index === `${nextLocation[1]}.${squareLocation}` &&
          props.color === 'checkerNull'
        ) {
          return 'possibleTarget';
        }
      } else {
        if (
          (props.index === `${nextLocation[1]}.${squareLocation}` &&
            props.color === 'checkerNull') ||
          (props.index === `${nextLocation[2]}.${squareLocation}` &&
            props.color === 'checkerNull')
        ) {
          return 'possibleTarget';
        }
      }
    }
  } else {
    return '';
  }
};

export default locationMoveable;
