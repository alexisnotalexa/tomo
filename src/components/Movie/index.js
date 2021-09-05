import React from 'react';
import './Movie.css';

const tempImgUrl = 'https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_SX300.jpg';

const Movie = () => {
    return (
        <div className="movie">
            <img className="movie__img" src={tempImgUrl} alt="temp-img" />
            <span className="movie__title">Stranger Things</span>
        </div>
    );
};

export default Movie;