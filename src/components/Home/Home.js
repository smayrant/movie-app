import React, { Component } from 'react';
import { API_KEY, API_URL } from '../../config'


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
                {!this.state.movies.results ? <h1>Loading...</h1> : this.state.movies.results.map(function (movie) {
                    return <h1>{movie.title}</h1>
                })}
            </div>
        );
    }
}

export default Home;