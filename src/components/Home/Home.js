import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../config';
import MovieList from '../MovieList/MovieList';

class Home extends Component {
    state = {
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

    }
    render() {
        return (
            <div>
                <MovieList movies={this.state.movies} />
            </div>
        );
    }
}

export default Home;