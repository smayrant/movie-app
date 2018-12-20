import React, { Component } from 'react';
import './MovieList.scss'
import { IMAGE_BASE_URL } from '../../config';

class MovieList extends Component {

    render() {
        return (
            <div>
                {/* If the data from the API has not been received and put into props, display loading movies, otherwise, display the movies */}
                {!this.props.movies.results ? <h1>Loading...</h1> : this.props.movies.results.map(function (movie) {
                    return (
                        <div key={movie.id}>
                            <img src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                            <h5 className="movie-title">{movie.title}</h5>
                        </div>)
                })}
            </div>
        );
    }
}

export default MovieList;