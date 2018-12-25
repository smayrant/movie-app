import React, { Component } from 'react';
import { API_URL, API_KEY, IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

class Movie extends Component {
    state = {
        movie: []
    }
    componentDidMount() {
        const movieId = this.props.match.params.movieid;
        fetch(`${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`)
            .then(resp => resp.json())
            .then(data => this.setState({
                movie: data
            }))
    }
    render() {
        console.log(this.state.movie.backdrop_path)
        return (
            <div>
                {!this.state.movie ? <p>Image Loading...</p> :
                    <div className="movie-container"
                        style={{
                            background:
                                `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.movie.backdrop_path}), #1c1c1c`
                        }}
                    >
                        <div className="hero-movie-text-container">
                            <div className="hero-movie-text">
                                <h1>{this.state.movie.original_title}</h1>
                                <p>{this.state.movie.overview}</p>
                            </div>
                        </div>
                    </div>}
            </div>
        );
    }
}

export default Movie;
