import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResults from '../SearchResults';
import './SearchBar.css';

const URL = 'https://www.omdbapi.com/?s=';
const API_KEY = '&apikey=902755be';

const SearchBar = (props) => {
    const { setMovie } = props;
    const [inputFocused, setInputFocused] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const showSearchResults = !isLoading && results.length && inputFocused;

    const fetchData = () => {
        const fetchURL = `${URL}${encodeURI(searchQuery)}${API_KEY}`;
        setIsLoading(true);
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                if (data['Search']) {
                    setResults(data['Search']);
                } else {
                    setResults([]);
                } 
                console.log(data);
            })
            .catch(error => {
                setHasError(true);
                setIsLoading(false);
                console.log(error);
            });
    };

    const onChange = (event) => {
        setHasError(false);
        setSearchQuery(event.target.value);
    };

    const onKeyUp = (event) => {
        if (event.code === 'Enter') fetchData();
    };

    return (
        <>
        <div className="search-bar">
            <FontAwesomeIcon className="search-bar__icon" icon={faSearch} onClick={fetchData} />
            <input 
                className="search-bar__input" 
                type="text" 
                placeholder="Search movies..."
                onChange={onChange}
                onKeyUp={onKeyUp}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)} 
            />
            <button className="search-bar__button" onClick={fetchData}>Submit</button>
        </div>
        {showSearchResults ? <SearchResults results={results} setMovie={setMovie} /> : null}
        </>
    );
};

export default SearchBar;