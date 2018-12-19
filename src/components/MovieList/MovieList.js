import React, { Component } from 'react';
import './MovieList.scss'
import { BASE_IMG_URL } from '../../config';

class MovieList extends Component {

    render() {
        return (
            <div>
                {!this.props.movies.results ? <h1>Loading...</h1> : this.props.movies.results.map(function (movie) {
                    return (
                        <div><img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="" />
                            <h5 key={movie.id
                            } className="movie-title">{movie.title}</h5></div>)
                })}
            </div>
        );
    }
}

export default MovieList;