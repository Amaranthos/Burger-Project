import React from 'react';
import styles from './Ingredient.module.css';

export const Ingredients = {
  BreadTop: 'bread-top',
  BreadBottom: 'bread-bottom',
  Meat: 'meat',
  Bacon: 'bacon',
  Cheese: 'cheese',
  Salad: 'salad',
};

export const Ingredient = ({ type }) => {
  const Component = map[type];
  return <>{Component && <Component />}</>;
};

const BreadTop = () => (
  <div className={styles.BreadTop}>
    <div className={styles.Seeds1} />
    <div className={styles.Seeds2} />
  </div>
);

const BreadBottom = () => <div className={styles.BreadBottom} />;

const Meat = () => <div className={styles.Meat}></div>;

const Bacon = () => <div className={styles.Bacon}></div>;

const Cheese = () => <div className={styles.Cheese}></div>;

const Salad = () => <div className={styles.Salad}></div>;

const map = {
  [Ingredients.BreadTop]: BreadTop,
  [Ingredients.BreadBottom]: BreadBottom,
  [Ingredients.Meat]: Meat,
  [Ingredients.Bacon]: Bacon,
  [Ingredients.Cheese]: Cheese,
  [Ingredients.Salad]: Salad,
};
