import React, { useEffect, useState } from 'react';
import './homepage.css';
import MovieCard from '../MovieCard/MovieCard';
import logo from '../../assets/tv.png';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import SearchResults from '../SearchResults/SearchResults';

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=c07bc06b8f15e84970110746b2cbb76e&language=en-US&sort_by=vote_average.desc&page=1&vote_count.gte=1000`)
            .then((response) => response.json())
            .then((data) => {
                const top10Movies = data.results.slice(0, 10);
                setMovies(top10Movies);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleSearch = async (query) => {
        setLoading(true);

        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=c07bc06b8f15e84970110746b2cbb76e&query=${query}&language=en-US&page=1`
            );

            if (response.ok) {
                const data = await response.json();
                setMovies(data.results);
            } else {
                // Handle API error
                console.error('Error fetching search results');
                setLoading(false);
            }
        } catch (error) {
            // Handle network error
            console.error('Network error:', error);
            setLoading(false);
        }

        setSearchResults(searchResults);
    };

    // Movie Cards
    return (
        <>
            <div className='header'>
                <div className='logo'>
                    <img src={logo} alt='Logo' />
                    <h2>MovieBox</h2>
                </div>

                <Search onSearch={handleSearch} />
            </div>

            <h1 className='homepageTitle'>The 10 Top Rated Movies </h1>
            <div className='homepage'>
                {searchResults.length > 0 ? (
                    <SearchResults results={searchResults} />
                ) : (
                    movies.map((movie) => (
                        <Link to={`/movies/${movie.id}`} key={movie.id}>
                            <MovieCard key={movie.id} movie={movie} />
                        </Link>
                    ))
                )}

            </div>
        </>
    );
};

export default HomePage;