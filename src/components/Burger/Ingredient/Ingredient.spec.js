import React from 'react';
import { render } from '@testing-library/react';
import { Ingredient, Ingredients } from './Ingredient';

describe('Ingredient', () => {
  it('should render nothing by default', () => {
    const { container } = render(<Ingredient />);
    expect(container.firstChild).toBeNull();
  });

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
