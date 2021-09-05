import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    const { results = [], setMovie } = props;

    const onListClick = (result) => {
        setMovie(result);
    };

    if (!results.length) return null;

    return (
        <ul className="search-results">
            {results.map((result, index) => (
                <li className={`result ${index === 0 && 'result--no-margin'}`} onClick={() => onListClick(result)}>
                    <span className="result__badge">{result['Type']}</span>
                    <span className="result__title">{result['Title']}</span>
                    <span className="result__year">{result['Year']}</span>
                </li>
            ))}
        </ul>
    )
};

export default SearchResults;