import React from 'react';
import styles from './style.module.css';

const LifeEvent = () => {

  return (
    <article className={styles.lifeEvent}>
      <header>
        <span className={styles.icon}>g</span>
        <span className={styles.date}>Jul. 2016</span>
        <h2>Self-employed Freelance Developer</h2>
      </header>
    </article>
  )
};

export default LifeEvent;