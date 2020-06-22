import React from 'react';
import { screen, render, within } from '@testing-library/react';
import { BuildControls } from './BuildControls';
import { Ingredients } from '../Burger/Ingredient';
import userEvent from '@testing-library/user-event';

describe('BuildControls', () => {
  it('should render some controls', () => {
    render(<BuildControls />);

    expect(screen.getByText(/Salad/)).toBeVisible();
    expect(screen.getByText(/Cheese/)).toBeVisible();
    expect(screen.getByText(/Meat/)).toBeVisible();
    expect(screen.getByText(/Bacon/)).toBeVisible();
  });

  it.each([['Salad'], ['Cheese'], ['Meat'], ['Bacon']])(
    "should call 'addIngredient' with %s ingredient when add is clicked",
    (type) => {
      const addIngredient = jest.fn();
      render(<BuildControls addIngredient={addIngredient} />);

      const control = screen.getByText(type);
      const more = within(control.parentElement).getByText('More');

      userEvent.click(more);

      expect(addIngredient).toHaveBeenCalledWith(Ingredients[type]);
    },
  );
});
