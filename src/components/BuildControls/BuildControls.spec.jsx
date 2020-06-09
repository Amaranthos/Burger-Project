import React from 'react';
import { screen, render } from '@testing-library/react';
import { BuildControls } from './BuildControls';

describe('BuildControls', () => {
  it('should render some controls', () => {
    render(<BuildControls />);

    expect(screen.getByText(/Salad/)).toBeVisible();
    expect(screen.getByText(/Cheese/)).toBeVisible();
    expect(screen.getByText(/Meat/)).toBeVisible();
    expect(screen.getByText(/Bacon/)).toBeVisible();
  });
});
