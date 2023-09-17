import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './moviedetails.css';
import { FaHeart } from 'react-icons/fa';

const MovieDetails = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);
    const [iconColor, setIconColor] = useState('#000000');

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c07bc06b8f15e84970110746b2cbb76e&language=en-US`)
            .then((response) => response.json())
            .then((data) => {
                setMovieDetails(data);
            })
            .catch((error) => {
                console.error('Error fetching movie details:', error);
            });
    }, [id]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    const releaseDate = new Date(movieDetails.release_date);
    const formattedReleaseDate = releaseDate.toISOString();


    // Function to handle the click event and change the color
    const changeColorOnClick = () => {
        const newColor = iconColor === '#000000' ? '#ff0000' : '#000000';
        setIconColor(newColor);
    };

    return (
        // Movie Details
        <div className='movieDetails'>
            <div className='titleFav'>
                <h1 data-testid='movie-title'>{movieDetails.title}</h1>
                <FaHeart
                    style={{ color: iconColor }}
                    className='favorite'
                    onClick={changeColorOnClick}
                />
            </div>
            <p data-testid='movie-release-date'><span>Release Date (in UTC):</span> {formattedReleaseDate}</p>
            <p data-testid='movie-runtime'><span>Runtime:</span> {movieDetails.runtime} minutes</p>
            <p data-testid='movie-overview'>{movieDetails.overview}</p>
            <a href="/" className="backButton">Back to Homepage</a>
        </div>
    );
};

export default MovieDetails;