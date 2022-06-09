import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import BugReportIcon from '@mui/icons-material/BugReport';
import { ThemeProvider } from '@mui/system';
import { createTheme, ImageListItem } from '@mui/material';

import styles from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {  
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  });


  return (
    <Box  sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
      <AppBar className={styles.header} position="static">
        <Toolbar>
        <BugReportIcon className={styles.sideIcon} />
          <ImageListItem component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <img className={styles.logo}  src="img/logo.png" alt='logo'/>
            </Link>
          </ImageListItem>
        </Toolbar>
      </AppBar>
      </ThemeProvider>
    </Box>
  );
}

export default Header