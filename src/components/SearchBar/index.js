import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResults from '../SearchResults';
import './SearchBar.css';

const generateURI = (searchQuery) => `https://www.omdbapi.com/?s=${encodeURI(searchQuery)}&apikey=902755be`;

const SearchBar = (props) => {
    const { setMovie } = props;
    const [showResultsList, setShowResultsList] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

    const showSearchResults = !isLoading && results.length && showResultsList;

    const fetchData = () => {
        const fetchURL = generateURI(searchQuery);
        setIsLoading(true);
        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                setIsLoading(false);
                if (data['Search']) {
                    setResults(data['Search']);
                } else if (data['Error']) {
                    setHasError(true);
                } else {
                    setResults([]);
                }
            })
            .catch(() => {
                setHasError(true);
                setIsLoading(false);
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
        {hasError ? <span className="search-bar__error-msg">Oops!  Something went wrong.</span> : null}
        <div className="search-bar">
            <div className={`search-bar__bar ${showSearchResults && 'search-bar__bar--show-results'} ${hasError && 'search-bar__bar--error'}`}>
                <input 
                    className="search-bar__input" 
                    type="text" 
                    placeholder="Search movies..."
                    onChange={onChange}
                    onFocus={() => setShowResultsList(true)}
                    onKeyUp={onKeyUp}
                />
                <button className="search-bar__button" onClick={fetchData}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            {showSearchResults 
                ? <SearchResults 
                    results={results} 
                    setMovie={setMovie} 
                    setShowResultsList={setShowResultsList} 
                /> : null}
        </div>
        </>
    );
};

export default SearchBar;