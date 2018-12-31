import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

class SearchResults extends Component {
    state = {
        movies: []
    }

    query = this.props.match.params.query
    // Retrieve the queried movies from the API
    componentDidMount() {
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${this.query}`)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    movies: data.results
                })
            )
    }

    render() {
        // If the movies from the API aren't yet in state, display a loading message, otherwise, render the movies to the page
        const renderMovies = !this.state.movies ? <div> Movies loading...</div> :
            this.state.movies.map(function (movie) {
                return (
                    <Link key={movie.id} to={`/movie/${movie.id}`}>
                        <Image rounded src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                        <h5 className="movie-title">{movie.title}</h5>
                    </Link>
                )
            })

        return (
            <div>
                <h3 className="search-heading">Search Results For {this.query}</h3>
                {renderMovies}
            </div>
        );
    }
}

export default SearchResults;