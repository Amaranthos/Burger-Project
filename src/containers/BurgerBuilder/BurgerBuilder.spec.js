import React from 'react';
import { render, screen } from '@testing-library/react';
import { BurgerBuilder } from './BurgerBuilder';

describe('BurgerBuilder', () => {
  it('should render a burger', () => {
    render(<BurgerBuilder />);

    expect(screen.getByText(/Burger/)).toBeVisible();
  });

  it('should render the builder controls', () => {
    render(<BurgerBuilder />);

    expect(screen.getByText(/Controls/)).toBeVisible();
  });
});
