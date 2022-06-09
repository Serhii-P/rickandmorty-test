import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import styles from './CharacterSearch.module.scss';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const CharacterSearch = ({setFieldSearch, fieldSearch}) => {
   const location = useLocation();
   const navigate = useNavigate();
   const inputRef = useRef();

   const urlParams = location.search?.includes("?name=") ?
                         location.search.replace('?name=', '') : ''
   const [query, setQuery] = useState(urlParams);

  const formHandler = (event) => {
    event.preventDefault();
    const inputValue = event.target.name.value;
     if (inputValue === "") return false;
     setQuery(inputValue);
     navigate(`/search?name=${inputValue.toLowerCase()}`);
  }

  const onClickClear = () => {
    setQuery('');
    inputRef.current.focus();
    
    if ( fieldSearch === false) {
      setFieldSearch(!fieldSearch)
    }
  }

  useEffect(() => {
    if (location?.search?.length === 0) {
      setQuery("");
    }
  }, [location, query]);

  const queryCharacter = (
    <h4>Search character: "{query}" </h4>
  );

  return (
    <>
      <form className={styles.form} onSubmit={formHandler}>
        <div className={styles.searchWrapper}>
          <input
             name="name"
            type="text"
            className={styles.input}
            ref={inputRef}
            defaultValue={query}
            placeholder="Search character..."
          />
          <button type="submit" className={`${styles.iconSearch} btn`}>
            <SearchIcon className={styles.icon} />
          </button>
          <button 
            type="reset" 
            className={`${styles.iconClose} btn`}
            onClick={onClickClear}
          >
            <CloseIcon className={styles.icon} />
          </button>
        </div>
      </form>
      {query && queryCharacter}
    </>
  );
}

export default CharacterSearch;
