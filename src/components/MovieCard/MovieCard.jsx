import React from 'react';
import './moviecard.css';

const MovieCard = ({ movie }) => {
    const { title, release_date, poster_path } = movie;
    const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        // Movie Card
        <div className="movieCard" data-testid="movie-card">
            <img src={posterUrl} alt={title} data-testid="movie-poster" />
            <h2 data-testid="movie-title">{title}</h2>
            <p data-testid="movie-release-date">{release_date}</p>
        </div>
    );
};

export default MovieCard;