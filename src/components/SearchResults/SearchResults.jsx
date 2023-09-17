import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './searchresults.css';

const SearchResults = ({ results, loading }) => {
    // Search function
    return (
        <div className="searchResults">
            {loading ? (
                <div className='loading'>Loading...</div>
            ) : (
                results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))
            )}
        </div>
    );
};

export default SearchResults;