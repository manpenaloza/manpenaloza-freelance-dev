import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import styles from './style.module.css';

const Button = ({ to, text }) => {
  return (
    <Link to={ prefixLink(`/${to}/`) } className={styles.btn}>
      {text} <span className="fa fa-chevron-right"></span>
    </Link>
  )
};

export default Button;