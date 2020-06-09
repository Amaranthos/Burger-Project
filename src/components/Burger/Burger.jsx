import React from 'react';
import styles from './Burger.module.css';
import { Ingredient, Ingredients } from './Ingredient';

export const Burger = ({ ingredients }) => {
  const ingredientComponents = Object.entries(ingredients)
    .map(([type, count]) =>
      [...Array(count)].map((_, i) => (
        <Ingredient key={type + i} type={type} />
      )),
    )
    .reduce((arr, el) => arr.concat(el), []);

  return (
    <div className={styles.Burger}>
      <Ingredient type={Ingredients.BreadTop} />
      {ingredientComponents.length ? (
        ingredientComponents
      ) : (
        <p>Please start adding ingredients!</p>
      )}
      <Ingredient type={Ingredients.BreadBottom} />
    </div>
  );
};
