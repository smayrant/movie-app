import React, { Component } from 'react';
import './MovieList.scss';
import { Carousel, Preloader } from 'react-materialize';
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
                    <Carousel>
                        {this.props.movies.results.map(function (movie) {
                            return (
                                <a className="col" href={`/movie/${movie.id}`}>
                                    <img src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                                    <h5 className="movie-title">{movie.title}</h5>
                                </a>
                            )
                        })}
                    </Carousel>

                }
            </div>
        );
    }
}

export default MovieList;

