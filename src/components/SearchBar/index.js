import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResults from '../SearchResults';
import './SearchBar.css';

const URL = 'https://www.omdbapi.com/?s=';
const API_KEY = '&apikey=902755be';

const SearchBar = () => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const fetchData = () => {
        const fetchURL = `${URL}${encodeURI(searchQuery)}${API_KEY}`;
        setIsLoading(true);
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                if (data['Search']) {
                    setResults(data['Search']);
                } else {
                    setResults([]);
                }
                setIsLoading(false);
                console.log(data['Search']);
            })
            .catch(error => {
                setHasError(true);
                setIsLoading(false);
                console.log(error);
            });
    };

    const onInputChange = (event) => {
        setHasError(false);
        setSearchQuery(event.target.value);
    };

    return (
        <>
        <div className="search-bar">
            <FontAwesomeIcon className="search-bar__icon" icon={faSearch} />
            <input 
                className="search-bar__input" 
                type="text" 
                placeholder="Search movies..."
                onChange={onInputChange} 
            />
            <button className="search-bar__button" onClick={fetchData}>Submit</button>
        </div>
        {!isLoading ? <SearchResults results={results} /> : null}
        </>
    );
};

export default SearchBar;