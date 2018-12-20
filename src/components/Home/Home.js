import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import HeroImage from '../HeroImage/HeroImage';
import MovieList from '../MovieList/MovieList';

class Home extends Component {
    state = {
        heroImageSrc: '',
        movies: []
    }
    componentDidMount() {
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movies: resp
                })
            })

        fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    heroImageSrc: resp.results[0].backdrop_path
                })
            })

    }
    render() {
        return (
            <div>
                <HeroImage image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImageSrc}`} />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default Home;