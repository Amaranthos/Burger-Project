import React from 'react';
import { render } from '@testing-library/react';
import { Burger } from './Burger';
import { Ingredients } from './Ingredient';

describe('Burger', () => {
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
