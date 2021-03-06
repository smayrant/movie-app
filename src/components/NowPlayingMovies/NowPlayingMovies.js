import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import no_image_poster from '../../images/no_image.jpg';
import '../../globalStylings.scss';

class NowPlayingMovies extends Component {
    state = {
        movies: [],
        total_pages: null,
        page_num: 1
    }

    fetchMovies = () => {
        // Retrieve the movies that are now playing in theaters from the API
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${this.state.page_num}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movies: resp.results,
                    total_pages: resp.total_pages
                })
            })

    }

    componentDidMount() {
        this.fetchMovies()
    }

    // smooth scroll to the top function
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    // go to the next page and run the scroll to top function 
    nextPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num <= this.state.total_pages) {
            this.setState({
                page_num: page_num += 1
            }, () => this.fetchMovies())
            this.scrollToTop()
        }
    }

    // go to the prev page and run the scroll to top function 
    prevPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num > 1) {
            this.setState({
                page_num: page_num -= 1
            }, () => this.fetchMovies())
            this.scrollToTop()
        }
    }
    render() {
        // if this.state.movies has data, check if the path to the poster is not null and render the image from the API. Otherwise, render the 'no image' poster. If there's no data in state, display a loading message.
        const NowPlayingMovies = this.state.movies ? this.state.movies.map(function (movie) {
            if (movie.poster_path) {
                return (
                    <Link to={`/movie/${movie.id}`} key={movie.id} className="link movie">
                        <img className="movie-poster" src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="Movie Poster" />
                        <h5 className="movie-title">{movie.title}</h5>
                    </Link>
                )
            }
            else {
                return (
                    <Link to={`/actor/${movie.id}`} key={movie.id} className="link movie">
                        <img className="movie-poster no-image-poster" src={no_image_poster} alt="Movie poster" />
                        <h5 className="movie-title">{movie.title}</h5>
                    </Link>
                )
            }
        }) : <p>Movies Loading...</p>

        return (
            <div className="view-all-movie-container">
                <h3 className="page-heading">movies now playing in theaters</h3>
                <hr />
                <div className="movie-list-container wrapper">
                    {NowPlayingMovies}
                </div>
                <div className="pagination-buttons-container">
                    <button className="button pagination-button" onClick={this.prevPage}>Previous</button>{' '}
                    <button className="button pagination-button next" onClick={this.nextPage}>Next</button>
                </div>;
            </div>
        );
    }
}

export default NowPlayingMovies;