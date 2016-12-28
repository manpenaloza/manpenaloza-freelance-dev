import React from 'react';
import styles from './style.module.css'

const FullWidthBgImage = ({ image, bgPosition, children, padding }) => {

  return(
    <div
      className={styles.bgImage}
      style={{
        padding,
        backgroundImage: `url(${image})`,
        backgroundPosition: bgPosition,
      }}
    >
      {children}
    </div>
  )
};

FullWidthBgImage.defaultProps = {
  bgPosition: "50%",
  padding: 0,
};

export default FullWidthBgImage;