import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';
import '../../globalStylings.scss';
import './actor.scss';
import no_image_poster from '../../images/no_image.jpg';

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
        // if this.state.actorMovieCredits has data, check if the path to the poster is not null and render the image from the API. Otherwise, render the 'no image' poster. If there's no data in state, display a loading message.
        const actorImage = this.state.actor ?
            <div className="actor-image-container">
                <img className="actor-image" src={`${IMAGE_BASE_URL}w300/${this.state.actor.profile_path}`} alt="Actor" />
            </div>
            :
            <div className="actor-image-container">
                <img className="actor-image" src={no_image_poster} alt="Actor" />
            </div>


        // const actorImage = !this.state.actor ? <p>Image Loading...</p> :
        //     <div className="actor-image-container">
        //         <img className="actor-image" src={`${IMAGE_BASE_URL}w300/${this.state.actor.profile_path}`} alt="Actor" />
        //     </div>

        const actorDetails = !this.state.actor ? <p>Actor details loading...</p> : <div className="actor-info-container">
            <div className="actor-info-text wrapper">
                <h1 className="actor-name-heading">{this.state.actor.name}</h1>
                <div className="bottom-actor-info-container">
                    <h4>Birth date: {this.state.actor.birthday}</h4>
                    <h4>Place of birth: {this.state.actor.place_of_birth}</h4>
                    <p>{this.state.actor.biography}</p>
                </div>
            </div>
        </div>

        // if this.state.actorMovieCredits has data, check if the path to the poster is not null and render the image from the API. Otherwise, render the 'no image' poster. If there's no data in state, display a loading message.
        const image = this.state.actorMovieCredits ? this.state.actorMovieCredits.map(function (credit) {
            if (credit.poster_path) {
                return (
                    <Link to={`/movie/${credit.id}`} key={credit.id} className="movie-credit-details-container link">
                        <img className="movie-poster" src={`${IMAGE_BASE_URL}w154${credit.poster_path}`} alt="Movie poster" />
                        <h5 className="movie-title">{credit.title}</h5>
                    </Link>
                )
            }
            else {
                return (
                    <Link to={`/movie/${credit.id}`} key={credit.id} className="movie-credit-details-container link">
                        <img className="movie-poster no-image-poster" src={no_image_poster} alt="Movie poster" />
                        <h5 className="movie-title">{credit.title}</h5>
                    </Link>
                )
            }
        }) : <p>Movies Loading...</p>

        return (
            <div>
                {actorImage}
                {actorDetails}
                <h3 className="other-roles-title wrapper">{this.state.actor.name} also has roles in: </h3>
                <div className="movie-list-container wrapper">
                    {image}
                </div>
            </div>
        );
    }
}

export default Actor;