import React, { useEffect, useState } from 'react';
import './Movie.css';

const Movie = (props) => {
    const { movie } = props;
    const [isImageBroken, setIsImageBroken] = useState(false);

    useEffect(() => {
        setIsImageBroken(false);
    }, [movie]);

    return (
        <div className="movie">
            {isImageBroken 
                ? <div className="movie__img--error"><span>No image available.</span></div> 
                : <img 
                    className="movie__img" src={movie['Poster']} 
                    alt={`${movie['Title']} Poster`} 
                    onError={() => setIsImageBroken(true)} 
                    onLoad={() => setIsImageBroken(false)} 
            />}
            <h3 className="movie__title">{movie['Title']}</h3>
        </div>
    );
};

export default Movie;