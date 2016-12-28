import React from 'react';
import styles from './style.module.css';

const LifePeriod = () => {
  return (
    <article className={styles.lifePeriod}>
      <header>
        <div>
          <span className={styles.date}>Date</span>
          <h2>dasf</h2>
        </div>
      </header>
      <div className={styles.lifePeriodContent}>
        <p>Content text</p>
        <div className={styles.tags}>
          <span>Tag</span>
          <span>Tag</span>
          <span>Tag</span>
          <span>Tag</span>
        </div>
      </div>
    </article>
  )
};

export default LifePeriod;