import React from 'react';
import styles from './style.module.css';

const LifeEvent = (props) => {
  const { date, title } = props;
  return (
    <article className={styles.lifeEvent}>
      <header>
        <span className={styles.icon}>*</span>
        <span className={styles.date}>{date}</span>
        <h2>{title}</h2>
      </header>
    </article>
  )
};

export default LifeEvent;