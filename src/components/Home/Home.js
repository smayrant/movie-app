import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../config';
import HeroImage from '../HeroImage/HeroImage';
import SearchField from '../Searchfield/Searchfield';
import MovieList from '../MovieList/MovieList';

class Home extends Component {
    state = {
        heroImageSrc: '',
        movies: []
    }
    componentDidMount() {
        // Retrieve the movies that are now playing in theaters from the API
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movies: resp
                })
            })
        // Retrieve the list of trending movies for the day from the API
        fetch(`${API_URL}trending/movie/day?api_key=${API_KEY}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    heroImageInfo: resp
                })
            })

    }
    render() {
        return (
            <div>
                <HeroImage heroImageInfo={this.state.heroImageInfo} />
                <SearchField />
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default Home;