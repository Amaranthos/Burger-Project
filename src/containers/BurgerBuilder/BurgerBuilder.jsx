import React, { useState } from 'react';
import { Burger } from '../../components/Burger/Burger';
import { Ingredients } from '../../components/Burger/Ingredient';
import { BuildControls } from '../../components/BuildControls/BuildControls';

export const BurgerBuilder = () => {
  const [ingredients] = useState({
    [Ingredients.Salad]: 0,
    [Ingredients.Bacon]: 0,
    [Ingredients.Cheese]: 0,
    [Ingredients.Meat]: 0,
  });

  return (
    <>
      <Burger ingredients={ingredients} />
      <BuildControls />
    </>
  );
};
