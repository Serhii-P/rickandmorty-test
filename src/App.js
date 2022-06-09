import React from 'react'
import { Routes, Route } from "react-router-dom";
import './App.scss';
import Layout from './components/Layout';
import Character from './components/Character';
import CharacterDetails from './components/CharacterDetails';
import Search from './components/Search';
import NotFound from './components/NotFound';

const App = () => {
  const [page, setPage] = React.useState(1);

  return (
    <div className="App">
      <Routes>
        <Route path="/rickandmorty-test/" element={<Layout />}>
          <Route path="/" element={<Character page={page}  setPage={setPage}/>} />
          <Route path="/:characterId" element={<CharacterDetails />} />
          <Route path="search" element={<Search />} />
          <Route path="/search/character/:characterId" element={<CharacterDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
