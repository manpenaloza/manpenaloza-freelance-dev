/*
 * PageWrapper has the responsibility to max-size and center the content container
 * see ./style.modules.css to see applied max-size and margin-auto usages on left an right size
 */

import React from 'react';
import styles from './style.module.css';

const PageWrapper = ({ children }) => {
  return (
    <div className={styles.pageWrapper}>
      {children}
    </div>
  )
};

export default PageWrapper;