import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import "./Movie.scss";

class Movie extends Component {
    state = {
        movie: [],
        castDetails: []
    }
    componentDidMount() {
        const movieId = this.props.match.params.movieId;
        // retrieve individual movie details
        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(resp => resp.json())
            .then(data => this.setState({
                movie: data
            }))
        // retrieve the credits for the individual movie
        fetch(`${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(data => this.setState({
                // place the first 5, main cast members within state
                castDetails: data.cast.slice(0, 5)
            }))
    }

    render() {
        const backdrop = !this.state.movie.backdrop_path ? <p>Image Loading...</p> :
            <div className="movie-backdrop-container"
                style={{
                    background:
                        `linear-gradient(to bottom, rgba(0,0,0,0)
                                    39%,rgba(0,0,0,0)
                                    41%,rgba(0,0,0,0.65)
                                    100%), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.movie.backdrop_path}), #1c1c1c
                                `
                }}>
            </div>

        const movieDetails = !this.state.movie ? <p>Movie Details Loading... </p> : <div className="movie-text-container">
            <div className="movie-text">
                <h1>{this.state.movie.original_title}</h1>
                <h5>Summary:</h5>
                <p>{this.state.movie.overview}</p>
            </div>
        </div>

        const actorDetails = !this.state.castDetails ? <p>Actor Details Loading... </p> :
            this.state.castDetails.map(function (actor) {
                return <NavLink to={`/actor/${actor.id}`} key={actor.id}>
                    <p>{actor.name} plays as {actor.character}</p>
                </NavLink>
            })

        return (
            <div className="movie-container">
                {backdrop}
                {movieDetails}
                {actorDetails}
            </div>
        );
    }
}

export default Movie;
