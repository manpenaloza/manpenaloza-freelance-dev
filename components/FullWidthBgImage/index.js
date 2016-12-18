import React from 'react';
import styles from './style.module.css'

const FullWidthBgImage = ({ image, bgPosition, children, padding }) => {

  console.log(image);
  return(
    <div
      className={styles.bgImage}
      style={{
        padding,
        backgroundImage: `url(${image})`,
        backgroundPosition: bgPosition
      }}
    >
      {children}
    </div>
  )
};

FullWidthBgImage.defaultProps = {
  backgroundPosition: "50%",
  padding: 0
};

export default FullWidthBgImage;