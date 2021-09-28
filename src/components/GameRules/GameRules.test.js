import React from 'react';
import { render } from '@testing-library/react';
import GameRules from './GameRules';

it('renders without crashing', () => {
  render(<GameRules />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<GameRules />);
  expect(asFragment()).toMatchSnapshot();
});
