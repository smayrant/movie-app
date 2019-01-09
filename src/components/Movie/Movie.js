import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';
import '../../globalStylings.scss';
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
                // place the first 10, main cast members within state
                castDetails: data.cast.slice(0, 10)
            }))
    }

    render() {
        console.log(this.state.movie)
        const backdrop = !this.state.movie.backdrop_path ? <p>Image Loading...</p> :
            <div className="movie-backdrop-container"
                style={{
                    background:
                        `linear-gradient(to bottom, rgba(0,0,0,0)
                                    39%,rgba(0,0,0,0)
                                    41%,rgba(0,0,0,0.65)
                                    100%), url(${IMAGE_BASE_URL}original${this.state.movie.backdrop_path}), #1c1c1c
                                `
                }}>
            </div>

        const movieDetails = !this.state.movie ? <p>Movie Details Loading... </p> : <div className="movie-text-container">
            <div className="movie-text">
                <h1 className="movie-title">{this.state.movie.original_title}</h1>
                <p>Rating: {this.state.movie.vote_average}</p>
                {/* <p>Genre: {this.state.movie.genres}</p> */}
                <p className="summary-title">Summary:</p>
                <p className="summary-text">{this.state.movie.overview}</p>
            </div>
        </div>

        const actorDetails = !this.state.castDetails ? <p>Actor Details Loading... </p> :
            this.state.castDetails.map(function (actor) {
                return <div className="actor-details-container" key={actor.id}>
                    <NavLink className="link" to={`/actor/${actor.id}`}>
                        <p>{actor.name}</p>
                        <img className="actor-image" src={`${IMAGE_BASE_URL}w154${actor.profile_path}`} alt="actor poster" />
                    </NavLink>
                    <p className="character-text">Plays as {actor.character}</p>
                </div>
            })

        return (
            <div className="movie-container">
                {backdrop}
                {movieDetails}
                <div className="actor-list-container">
                    {actorDetails}
                </div>
            </div>
        );
    }
}

export default Movie;
