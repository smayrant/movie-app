import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../config';
import HeroImage from '../HeroImage/HeroImage';
import SearchField from '../Searchfield/Searchfield';
import NowPlayingMovieList from '../NowPlayingMovieList/NowPlayingMovieList';
import PopularMovieList from '../PopularMovieList/PopularMovieList';
import TopRatedMovieList from '../TopRatedMovieList/TopRatedMovieList';
import { Link } from 'react-router-dom';
import '../../globalStylings.scss';

class Home extends Component {
    state = {
        heroImageSrc: '',
        nowPlayingMovies: [],
        popularMovies: [],
        topRatedMovies: []
    }

    componentDidMount() {
        // Retrieve the movies that are now playing in theaters from the API
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    nowPlayingMovies: resp.results.slice(0, 6)
                })
            })

        // Retrieve the popular movies from the API
        fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    popularMovies: resp.results.slice(0, 6)
                })
            })

        // Retrieve the popular movies from the API
        fetch(`${API_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    topRatedMovies: resp.results.slice(0, 6)
                })
            })

        // Retrieve the list of trending movies for the day from the API
        fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    heroImageInfo: resp
                })
            })

    }
    render() {
        return (
            <div>
                <HeroImage heroImageInfo={this.state.heroImageInfo} />
                <SearchField />
                <div className="home-movie-container">
                    <h3 className="movie-header">Now Playing in Theaters - <Link to="/nowPlaying">View All</Link></h3>
                    <NowPlayingMovieList movies={this.state.nowPlayingMovies} />
                </div>
                <div className="home-movie-container">
                    <h3 className="movie-header">Most Popular - <Link to="/popular">View All</Link></h3>
                    <PopularMovieList movies={this.state.popularMovies} />
                </div>
                <div className="home-movie-container">
                    <h3 className="movie-header">Top Rated - <Link to="/topRated">View All</Link></h3>
                    <TopRatedMovieList movies={this.state.topRatedMovies} />
                </div>
            </div>
        );
    }
}

export default Home;