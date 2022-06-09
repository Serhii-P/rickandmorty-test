import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import styles from './Pagination.module.scss';
import { useMediaQuery } from '@mui/material';

const BasicPagination = ({ page, setPage }) => {

  const paginateChangeHandler = (event, value) => {
     setPage(value);
  }

  const matches = useMediaQuery('(max-width:500px)') ? 3 : 10;


  return (
    <Stack spacing={2} >
      <Pagination page={page} count={matches} size="large" color="primary" 
        className={styles.pagination} 
        onChange={paginateChangeHandler}
      />
    </Stack>
  );
}

export default BasicPagination