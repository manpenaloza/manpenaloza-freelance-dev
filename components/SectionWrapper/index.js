import React from 'react';
import styles from './style.module.css';

const SectionWrapper = ({ customStyle, children }) => {
  console.log('style', styles);

  return (
    <div className={`${styles.SectionWrapper} ${customStyle}`}>
      {children}
    </div>
  )
};

SectionWrapper.defaultProps = {
  customStyle: ''
};

SectionWrapper.PropTypes = {
  customStyle: React.PropTypes.string
};

export default SectionWrapper;