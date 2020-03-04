import React, { useState } from 'react';
import '../scss/documentParameters.scss';
import '../scss/gameLayouts.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import GameSquares from './GameSquares';

function App() {
  // const [target, setTarget] = useState('');

  return (
    <Provider store={store}>
      <div className="gameBoard">
        {[...Array(64)].map((e, i) => (
          <GameSquares
            key={i}
            index={i}
            // target={target}
            // setTarget={setTarget}
            // active={i === target}
            // onClick={() => setTarget(i)}
          />
        ))}
      </div>
    </Provider>
  );
}

export default App;
