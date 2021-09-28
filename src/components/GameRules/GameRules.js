import React from 'react';
import './GameRules.css';

const GameRules = () => {
  return (
    <div className="GameRules">
      <p>
        The game consists of a grid of lights which is 5x5 by default. When the
        game starts, a random number or a stored pattern of these lights is
        switched on. Pressing any of the lights will toggle it and the four
        adjacent lights. The goal of the puzzle is to switch all the lights off,
        preferably in as few button presses as possible.
      </p>
    </div>
  );
};

export default GameRules;
