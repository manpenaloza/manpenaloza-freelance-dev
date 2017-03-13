import React from 'react';
import styles from './style.module.css';

const renderTags = (tags = []) => {
  return tags.map((tag) => (
    <span key={tag}>{tag}</span>
  ));
}

const LifePeriod = (props) => {
  const { date, title, description, tags } = props;
  return (
    <article className={styles.lifePeriod}>
      <div className={styles.mainContent}>
        <header>
            <span className={styles.date}>{date}</span>
            <h2>{title}</h2>
        </header>
        <p>{description}</p>
      </div>
      <div className={styles.tags}>
        {renderTags(tags)}
      </div>
    </article>
  )
};

export default LifePeriod;