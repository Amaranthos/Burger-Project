import React from 'react';
import { Ingredients } from '../Burger/Ingredient';
import { Control } from './Control';
import styles from './BuildControls.module.css';

const controls = [
  {
    label: 'Salad',
    type: Ingredients.Salad,
  },
  {
    label: 'Bacon',
    type: Ingredients.Bacon,
  },
  {
    label: 'Meat',
    type: Ingredients.Meat,
  },
  {
    label: 'Cheese',
    type: Ingredients.Cheese,
  },
];

export const BuildControls = () => (
  <div className={styles.BuildControls}>
    {controls.map(({ label }) => (
      <Control key={label} label={label} />
    ))}
  </div>
);
