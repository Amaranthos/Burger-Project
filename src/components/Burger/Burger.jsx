import React from 'react';
import styles from './Burger.module.css';
import { Ingredient, Ingredients } from './Ingredient';

export const Burger = ({ ingredients }) => (
  <div className={styles.Burger}>
    <Ingredient type={Ingredients.BreadTop} />
    {Object.entries(ingredients).map(([type, count]) =>
      [...Array(count)].map((_, i) => (
        <Ingredient key={type + i} type={type} />
      )),
    )}
    <Ingredient type={Ingredients.BreadBottom} />
  </div>
);
