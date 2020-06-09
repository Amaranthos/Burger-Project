import React from 'react';
import { render, screen } from '@testing-library/react';
import { BurgerBuilder } from './BurgerBuilder';

describe('BurgerBuilder', () => {
  it('should render a burger', () => {
    const { container } = render(<BurgerBuilder />);

    expect(container.getElementsByClassName('Burger')).toHaveLength(1);
  });

  it('should render the builder controls', () => {
    render(<BurgerBuilder />);

    expect(screen.getByText(/Salad/)).toBeVisible();
    expect(screen.getByText(/Cheese/)).toBeVisible();
    expect(screen.getByText(/Meat/)).toBeVisible();
    expect(screen.getByText(/Bacon/)).toBeVisible();
  });
});
