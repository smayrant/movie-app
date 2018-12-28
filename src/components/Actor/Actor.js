import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';
import { NavLink } from 'react-router-dom';

class Actor extends Component {
    state = {
        actor: [],
        actorMovieCredits: []
    }
    componentDidMount() {
        const actorId = this.props.match.params.actorId;
        // retrieve individual actor details
        fetch(`${API_URL}person/${actorId}?api_key=${API_KEY}&language=en-US`)
            .then(resp => resp.json())
            .then(data => this.setState({
                actor: data
            }))
        // retrieve the details of the roles the actor has had
        fetch(`${API_URL}person/${actorId}/movie_credits?api_key=${API_KEY}&language=en-US`)
            .then(resp => resp.json())
            // return the first 15 results from the API
            .then(data => this.setState({
                actorMovieCredits: data.cast.slice(0, 15)
            }))
    }
    render() {
        const actorImage = !this.state.actor ? <p>Image Loading...</p> :
            <div className="actor-image-container">
                <img className="actor-image" src={`${IMAGE_BASE_URL}w300/${this.state.actor.profile_path}`} alt="Actor" />
            </div>

        const actorDetails = !this.state.actor ? <p>Actor details loading...</p> : <div className="actor-details-container">
            <h4>{this.state.actor.name}</h4>
            <h6>Birth date: {this.state.actor.birthday}</h6>
            <h6>Place of birth: {this.state.actor.place_of_birth}</h6>
            <p>{this.state.actor.biography} </p>
        </div>

        const movieCredits = !this.state.actorMovieCredits ? <p>Movie credits loading...</p> :
            this.state.actorMovieCredits.map(function (credit) {
                return (

                    <NavLink to={`/movie/${credit.id}`} key={credit.id} className="movie-credit-details-container">
                        <img className="actor-image" src={`${IMAGE_BASE_URL}w154${credit.poster_path}`} alt="" />
                    </NavLink>
                )
            })
        return (
            <div>
                {actorImage}
                {actorDetails}
                <h5 className="other-roles-title">{this.state.actor.name} has also had roles in: </h5>
                {movieCredits}
            </div>
        );
    }
}

export default Actor;