import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCharacterSearch } from '../../api';
import CharacterCard from '../CharacterCard/index.jsx';
import CharacterSearch from '../CharacterSearch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './Search.module.scss'

const Search = () => {
  const location = useLocation();
  const search = location.search.replace('?name=', '')
  const [searchCharacter, setSearchCharacter] = useState([]);
  const [fieldSearch, setFieldSearch] = useState(false);

  useEffect(() => {
    getCharacterSearch(location.search)
    .then(res => {
      setSearchCharacter(res);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setFieldSearch(false)
    })
  }, [location.search]);

const isSearch = search !== null && !searchCharacter?.length;

 if (isSearch) {
  return (
    <>
      <CharacterSearch setFieldSearch={setFieldSearch} fieldSearch={fieldSearch}/>
      <div className={styles.informText}>
        {fieldSearch ?
          <h2>Write character...</h2> :
          <h3>The wrong character...</h3> 
        }
        <Link to="/">
          <Button size="small" color="primary" >
            <ArrowBackIcon />
            Back
          </Button>
        </Link>
      </div>
    </>
  );
}

  return (
    <>
      <CharacterSearch />

      <div className="container">
        <div>
            {searchCharacter.map(item => (
              <CharacterCard
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                location={item.location.name}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default Search