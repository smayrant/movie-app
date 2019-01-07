import React from 'react';
import { NavLink } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../../config';
import '../../globalStylings.scss';

const PopularMovieList = (props) => {
    return (
        <div className="movie-list-container">
            {/* If there's no movie data props, display a loading message, otherwise, display the movies */}
            {!props.movies ?
                <div>
                    Movies loading...
                </div>
                :
                props.movies.map(function (movie) {
                    return (
                        <div key={movie.id}>
                            <NavLink className="link" to={`/movie/${movie.id}`}>
                                <img className="movie-poster" src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                                <h5 className="movie-title">{movie.title}</h5>
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PopularMovieList;


