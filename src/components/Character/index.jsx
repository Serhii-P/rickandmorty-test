
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import CharacterSearch from '../CharacterSearch';
import styles from './Character.module.scss';
import { Link } from 'react-router-dom';
import { getCharacters } from '../../api';
import BasicPagination from '../Pagination';

const Character = ({page, setPage}) => {
  const [characters, setCharacters] = React.useState([]);

  React.useEffect(() => {
    getCharacters(page)
      .then(res => {
        setCharacters(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [page]);

  const setStatus = (item) => {
    if (item.status === "Alive") {
      return styles.green;
    } else if (item.status === "unknown") {
      return styles.purple;
    } else {
      return styles.red;
    }
  };

  return (
    <>
    <div> 
        <h1 className={styles.title}>Rick and Morty Characters</h1>
        <CharacterSearch />
    </div>

    <List className={styles.list}>
      {characters.map((item) => (
        <div key={item.id} className={styles.characterBlock}>
          <Link className={styles.wrapper}
                to={`${item.id}`} >
            <ListItem >
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.image} className={styles.avatar}/>
              </ListItemAvatar>
              <ListItemText 
                primary={
                  <div className={styles.characterName} >
                    {item.name}
                  </div>
                }
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                    </Typography>
                    <span className={styles.status}>Status - </span>
                    <span className={`${setStatus(item)} ${styles.statusText}`}>{item.status}</span>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Link>

      <Divider variant="inset" component="li"/>
      </div>
      ))}
    </List>
    <BasicPagination page={page} setPage={setPage} />
    </>

  );
}

export default Character;