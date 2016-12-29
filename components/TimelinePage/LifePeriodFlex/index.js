import React from 'react';
import styles from './style.module.css';

const LifePeriod = () => {
  return (
    <article className={styles.lifePeriod}>
      <header>
        <div>
          <span className={styles.date}>Date</span>
          <h2>Flex</h2>
        </div>
      </header>
      <div className={styles.lifePeriodContent}>
        <p>Content text is her sdf is her Content is sdfsdf Content texttext is her</p>
        <div className={styles.tags}>
          <span>Javascript</span>
          <span>Redux</span>
          <span>React Native</span>
          <span>Axios</span>
          <span>Google Play</span>
          <span>Google Analytics</span>
          <span>Node JS</span>
          <span>React</span>
        </div>
      </div>
    </article>
  )
};

export default LifePeriod;