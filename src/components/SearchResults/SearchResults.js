import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import no_image_poster from '../../images/no_image.jpg';
import '../../globalStylings.scss';
import { animateScroll as scroll } from "react-scroll";

class SearchResults extends Component {
    state = {
        movies: [],
        total_pages: null,
        page_num: 1
    }

    query = this.props.match.params.query

    fetchMovies = () => {
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=${this.state.page_num}&query=${this.query}`)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    movies: data.results,
                    total_pages: data.total_pages
                })
            )
    }
    // Retrieve the queried movies from the API
    componentDidMount() {
        this.fetchMovies()
    }

    scrollToTop = () => {
        scroll.scrollToTop()
    }

    nextPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num <= this.state.total_pages) {
            this.setState({
                page_num: page_num += 1
            }, () => this.fetchMovies())
            this.scrollToTop()
        }
    }

    prevPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num > 1) {
            this.setState({
                page_num: page_num -= 1
            })
            this.scrollToTop()
        }
    }

    render() {

        // if this.state.movies has data, check if the path to the poster is not null and render the image from the API. Otherwise, render the 'no image' poster. If there's no data in state, display a loading message.
        const searchedMovies = this.state.movies ? this.state.movies.map(function (movie) {
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
            <div>
                <h3 className="page-heading">Search Results For: {this.query}</h3>
                <hr />
                <div className="movie-list-container view-all-movie-container wrapper">
                    {searchedMovies}
                </div>
                <div className="pagination-buttons-container">
                    <button className="button pagination-button" onClick={this.prevPage}>Previous</button>{' '}
                    <button className="button pagination-button next" onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
    }
}

export default SearchResults;