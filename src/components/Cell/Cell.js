import React from 'react';
import './Cell.css';

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

function Cell({ flipCellsAroundMe, isLit, nrows, ncols }) {
  const width = (1 / ncols) * 100;
  const height = (1 / nrows) * 100;
  const style = {
    width: `${width}%`,
    height: `${height}%`,
  };
  const classes = `Cell ${isLit ? 'Cell-lit' : ''}`;
  return (
    <td
      className={classes}
      onClick={flipCellsAroundMe}
      role="button"
      style={style}
    />
  );
}

export default Cell;
