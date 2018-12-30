import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';

class SearchResults extends Component {
    state = {
        movies: []
    }
    componentDidMount() {
        const query = this.props.match.params.query
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    movies: data
                })
            )
    }

    render() {
        return (
            <div>
                {console.log(this.state.movies)}
            </div>
        );
    }
}

export default SearchResults;