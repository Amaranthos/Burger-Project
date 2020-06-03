import React from 'react';
import { render } from '@testing-library/react';
import { Ingredient, Ingredients } from './Ingredient';

describe('Ingredient', () => {
  it.each([
    [Ingredients.BreadTop, 'BreadTop'],
    [Ingredients.BreadBottom, 'BreadBottom'],
    [Ingredients.Meat, 'Meat'],
    [Ingredients.Bacon, 'Bacon'],
    [Ingredients.Cheese, 'Cheese'],
    [Ingredients.Salad, 'Salad'],
  ])('should render the %s ingredient', (type, className) => {
    const { container } = render(<Ingredient type={type} />);
    expect(container.firstChild).toBeVisible();
    expect(container.firstChild).toHaveClass(className);
  });
});
