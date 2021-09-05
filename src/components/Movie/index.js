import React from 'react';
import './Movie.css';

const Movie = (props) => {
    const { movie } = props;

    return (
        <div className="movie">
            <img className="movie__img" src={movie['Poster']} alt="temp-img" />
            <span className="movie__title">{movie['Title']}</span>
        </div>
    );
};

export default Movie;