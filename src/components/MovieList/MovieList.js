import React, { Component } from 'react';
import './MovieList.scss'

class MovieList extends Component {
    render() {
        return (
            <div>
                {!this.props.movies.results ? <h1>Loading...</h1> : this.props.movies.results.map(function(movie){
                    return <h1>{movie}</h1>
                })}
            </div>
        );
    }
}

export default MovieList;