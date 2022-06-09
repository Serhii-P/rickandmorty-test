import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>&copy; Copyright 2022 </p>
    </div>
  )
}

export default Footer