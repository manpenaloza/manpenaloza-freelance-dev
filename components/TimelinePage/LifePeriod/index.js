import React from 'react';
import styles from './style.module.css';

const LifePeriod = () => {
  return (
    <article className={styles.lifePeriod}>
      <div className={styles.mainContent}>
        <header>
            <span className={styles.date}>Date</span>
            <h2>Flex</h2>
        </header>
        <p>FLEX Content text is her sdf is her Content is sdfsdf Content texttext is her</p>
      </div>
      <div className={styles.tags}>
        <span>FLEX Javascript</span>
        <span>Redux</span>
        <span>React Native</span>
        <span>Axios</span>
        <span>Google Play</span>
        <span>Google Analytics</span>
        <span>Node JS</span>
        <span>FLEX React</span>
      </div>
    </article>
  )
};

export default LifePeriod;