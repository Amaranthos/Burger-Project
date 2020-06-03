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
  switch (type) {
    case Ingredients.BreadTop:
      return <BreadTop />;
    case Ingredients.BreadBottom:
      return <BreadBottom />;
    case Ingredients.Meat:
      return <Meat />;
    case Ingredients.Bacon:
      return <Bacon />;
    case Ingredients.Cheese:
      return <Cheese />;
    case Ingredients.Salad:
      return <Salad />;
    default:
      return null;
  }
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
