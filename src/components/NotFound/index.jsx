import React from 'react'
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <div>
      <h1 className={styles.title}>Page not found</h1>
      <div>
      <Link to="/" className={styles.link}>
        <ArrowBackIcon />
        Back to main page
      </Link>
      </div>
    </div>
  )
}

export default NotFound