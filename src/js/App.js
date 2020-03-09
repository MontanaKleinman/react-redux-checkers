import React from 'react';
import '../scss/documentParameters.scss';
import '../scss/gameLayouts.scss';
import { Provider } from 'react-redux';
import store from './redux/store';
import GameSquares from './GameSquares';
import PlayerInfo from './PlayerInfo';

function App() {
  return (
    <Provider store={store}>
      <div className="gameBox">
        <PlayerInfo index="one" />
        <div className="gameBoard">
          {[...Array(64)].map((e, i) => (
            <GameSquares key={i} index={i} />
          ))}
        </div>
        <PlayerInfo index="two" />
      </div>
    </Provider>
  );
}

export default App;
