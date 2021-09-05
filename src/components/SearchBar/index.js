import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import SearchResults from '../SearchResults';
import './SearchBar.css';

const SearchBar = () => {
    return (
        <>
        <div className="search-bar">
            <FontAwesomeIcon className="search-bar__icon" icon={faSearch} />
            <input 
                className="search-bar__input" 
                type="text" 
                placeholder="Search movies..." 
            />
        </div>
        <SearchResults />
        </>
    );
};

export default SearchBar;