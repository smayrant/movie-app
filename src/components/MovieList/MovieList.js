import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MovieList.scss';
import { Preloader } from 'react-materialize';
import { IMAGE_BASE_URL } from '../../config';

class MovieList extends Component {
    render() {
        return (
            <div>
                {/* If there's no movie data props, display the preloader animation, otherwise, display the movie carousel */}
                {!this.props.movies.results ?
                    <div>
                        <Preloader flashing size='big' />
                    </div>
                    :

                    this.props.movies.results.map(function (movie) {
                        return (
                            <NavLink key={movie.id} to={`/movie/${movie.id}`}>
                                <img src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                                <h5 className="movie-title">{movie.title}</h5>
                            </NavLink>
                        )
                    })


                }
            </div>
        );
    }
}

export default MovieList;

