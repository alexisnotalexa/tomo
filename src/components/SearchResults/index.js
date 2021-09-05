import React from 'react';
import './SearchResults.css';

const tempResults = ['Blah1', 'Blah2', 'Blah3', 'Blah4', 'Blah5'];

const SearchResults = () => {
    return (
        <ul className="search-results">
            {tempResults.map((result, index) => (
                <li className={`result ${index === 0 && 'result--no-margin'}`}>
                    <span className="result__badge">movie</span>
                    <span className="result__title">{result}</span>
                    <span className="result__year">1999</span>
                </li>
            ))}
        </ul>
    )
};

export default SearchResults;