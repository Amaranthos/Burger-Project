import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

  describe('When I add ingredients', () => {
    it.each([
      ['Salad', 2],
      ['Cheese', 3],
      ['Meat', 1],
      ['Bacon', 2],
    ])('should render %s %s time(s)', (type, count) => {
      const { container } = render(<BurgerBuilder />);

      expect(container.getElementsByClassName(type)).toHaveLength(0);

      const ingredient = screen.getByText(type);
      const more = within(ingredient.parentElement).getByText('More');

      for (const _ of Array(count).keys()) {
        userEvent.click(more);
      }

      expect(container.getElementsByClassName(type)).toHaveLength(count);
    });
  });
});
