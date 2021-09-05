import React from 'react';
import './SearchResults.css';

const MovieTypes = {
    episode: 'episode',
    game: 'game',
    movie: 'movie',
    series: 'series',
};

const BadgeColors = {
    blue: 'cornflowerblue',
    green: 'darkseagreen',
    orange: 'darkorange',
    red: 'indianred',
    yellow: 'gold'
}

const SearchResults = (props) => {
    const { results = [], setMovie } = props;

    const getBadgeColor = (type) => {
        switch(type) {
            case MovieTypes.episode:
                return BadgeColors.red;
            case MovieTypes.game:
                return BadgeColors.green;
            case MovieTypes.movie:
                return BadgeColors.blue;
            case MovieTypes.series:
                return BadgeColors.yellow;
            default:
                return BadgeColors.orange;
        }
    };

    const onListClick = (result) => {
        setMovie(result);
    };

    if (!results.length) return null;

    return (
        <ul className="search-results">
            {results.map((result, index) => (
                <li className={`result ${index === 0 && 'result--no-margin'}`} onClick={() => onListClick(result)}>
                    <span className="result__badge" style={{ background: getBadgeColor(result['Type'])}}>{result['Type']}</span>
                    <span className="result__title">{result['Title']}</span>
                    <span className="result__year">{result['Year']}</span>
                </li>
            ))}
        </ul>
    )
};

export default SearchResults;