import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import './MovieList.scss';
import { IMAGE_BASE_URL } from '../../config';
import '../../globalStylings.scss';

class MovieList extends Component {
    render() {
        return (
            <div className="movie-list-container">
                {/* If there's no movie data props, display a loading message, otherwise, display the movie carousel */}
                {!this.props.movies ?
                    <div>
                        Movies loading...
                    </div>
                    :

                    this.props.movies.map(function (movie) {
                        return (
                            <div key={movie.id}>
                                <NavLink to={`/movie/${movie.id}`}>
                                    <Image className="movie-poster" src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                                    <h5 className="movie-title">{movie.title}</h5>
                                </NavLink>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default MovieList;

