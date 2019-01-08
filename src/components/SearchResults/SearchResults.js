import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import '../../globalStylings.scss';

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

    nextPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num <= this.state.total_pages) {
            this.setState({
                page_num: page_num += 1
            }, () => this.fetchMovies())
        }
    }

    prevPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num > 1) {
            this.setState({
                page_num: page_num -= 1
            }, () => this.fetchMovies())
        }
    }

    render() {
        // If the movies from the API aren't yet in state, display a loading message, otherwise, render the movies to the page
        const renderMovies = !this.state.movies ? <div> Movies loading...</div> :
            this.state.movies.map(function (movie) {
                return (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <img src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                        <h5 className="movie-title">{movie.title}</h5>
                    </Link>
                )
            })

        return (
            <div>
                <h3 className="page-heading">Search Results For {this.query}</h3>
                <hr />
                <div className="movie-list-container">
                    {renderMovies}
                </div>
                <div>
                    <button className="button pagination-button" onClick={this.prevPage}>Previous</button>{' '}
                    <button className="button pagination-button" onClick={this.nextPage}>Next</button>
                </div>
            </div>
        );
    }
}

export default SearchResults;