import React from 'react';

import styles from './Control.module.css';

export const Control = ({ label, onMore }) => (
  <div className={styles.Control}>
    <div className={styles.Label}>{label}</div>
    <button className={styles.Less}>Less</button>
    <button className={styles.More} onClick={onMore}>
      More
    </button>
  </div>
);
