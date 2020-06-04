import React, { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';
import { Ingredients } from '../../components/Burger/Ingredient';

export const BurgerBuilder = () => {
  const [ingredients] = useState({
    [Ingredients.Salad]: 1,
    [Ingredients.Bacon]: 1,
    [Ingredients.Cheese]: 2,
    [Ingredients.Meat]: 2,
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <div>Controls</div>
    </>
  );
};
