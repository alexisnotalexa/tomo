import React, { useState } from 'react';
import Movie from '../Movie';
import SearchBar from '../SearchBar';
import './App.css';

const App = () => {
  const [movie, setMovie] = useState(null);

  return (
    <div className="App">
      {movie ? <Movie movie={movie} /> : null}
      <SearchBar setMovie={setMovie} />
    </div>
  );
};

export default App;
