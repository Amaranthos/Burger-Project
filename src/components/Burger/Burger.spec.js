import React from 'react';
import { render, screen } from '@testing-library/react';
import { Burger } from './Burger';
import { Ingredients } from './Ingredient';

describe('Burger', () => {
  describe('Given there are ingredients', () => {
    it('should render the ingredients', () => {
      const ingredients = {
        [Ingredients.Salad]: 1,
        [Ingredients.Bacon]: 1,
        [Ingredients.Cheese]: 2,
        [Ingredients.Meat]: 2,
      };
      const { container } = render(<Burger ingredients={ingredients} />);

      expect(container.getElementsByClassName('BreadTop')).toHaveLength(1);
      expect(container.getElementsByClassName('BreadBottom')).toHaveLength(1);
      expect(container.getElementsByClassName('Salad')).toHaveLength(1);
      expect(container.getElementsByClassName('Bacon')).toHaveLength(1);
      expect(container.getElementsByClassName('Cheese')).toHaveLength(2);
      expect(container.getElementsByClassName('Meat')).toHaveLength(2);
    });
  });
  describe('Given there are no ingredients', () => {
    it('should render a helpful message', () => {
      const ingredients = {
        [Ingredients.Salad]: 0,
        [Ingredients.Bacon]: 0,
        [Ingredients.Cheese]: 0,
        [Ingredients.Meat]: 0,
      };
      const { container } = render(<Burger ingredients={ingredients} />);

      expect(container.getElementsByClassName('BreadTop')).toHaveLength(1);
      expect(container.getElementsByClassName('BreadBottom')).toHaveLength(1);

      expect(
        screen.getByText(/Please start adding ingredients!/),
      ).toBeVisible();
    });
  });
});
