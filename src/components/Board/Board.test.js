import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Board tests', () => {
  it('renders without crashing', () => {
    render(<Board />);
  });
  it('matches snapshot for board with all lights on', () => {
    const { asFragment } = render(<Board chanceLightStartsOn={1} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('matches snapshot for board with all lights off', () => {
    const { asFragment } = render(<Board chanceLightStartsOn={0} />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('handles cell clicks properly', () => {
    const { getAllByRole } = render(
      <Board nrows={3} ncols={3} chanceLightStartsOn={1} />
    );
    const cells = getAllByRole('button');
    cells.forEach((cell) => {
      expect(cell).toHaveClass('Cell-lit');
    });

    //Click Middle Cell
    fireEvent.click(cells[4]);
    // Make sure clicked cell is now no longer lit
    expect(cells[4]).not.toHaveClass('Cell-lit');

    //Cells vert and horiz adjacent to middle cell
    let adjCells = [cells[1], cells[3], cells[5], cells[7]];
    // Make sure vert and horiz adjacent cells are now no longer lit
    adjCells.forEach((cell) => {
      expect(cell).not.toHaveClass('Cell-lit');
    });

    //Corner cells not adjacent to middle cell
    let cornerCells = [cells[0], cells[2], cells[6], cells[8]];
    // Make sure corner cells are still lit
    cornerCells.forEach((cell) => {
      expect(cell).toHaveClass('Cell-lit');
    });
  });
  it('handles a winning condition properly', () => {
    const { getAllByRole, queryByTestId } = render(
      <Board nrows={1} ncols={3} chanceLightStartsOn={1} />
    );
    const cells = getAllByRole('button');
    expect(queryByTestId('winning-header')).not.toBeInTheDocument();
    fireEvent.click(cells[1]);
    expect(queryByTestId('winning-header')).toBeInTheDocument();
  });
});
