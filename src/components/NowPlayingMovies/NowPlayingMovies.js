import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../config';
import { NavLink } from 'react-router-dom';
import { Image, Button } from 'react-bootstrap';

class NowPlayingMovies extends Component {
    state = {
        movies: [],
        total_pages: null,
        page_num: 1
    }

    fetchMovies = () => {
        // Retrieve the movies that are now playing in theaters from the API
        fetch(`${API_URL}movie/now_playing?api_key=${API_KEY}&language=en-US&page=${this.state.page_num}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movies: resp.results
                })
            })

    }

    componentDidMount() {
        this.fetchMovies()
    }
    nextPage = () => {
        let { page_num } = this.state;
        if (this.state.movies) {
            this.setState({
                page_num: page_num += 1
            })
            this.fetchMovies()
        }
    }
    render() {
        return (
            <div>
                <h3 className="page-heading">movies now playing in theaters</h3>
                <div className="movie-list-container">
                    {/* If there's no movie data state, display a loading message, otherwise, display the movie carousel */}
                    {!this.state.movies ?
                        <div>
                            Movies loading...
                    </div>
                        :

                        this.state.movies.map(function (movie) {
                            return (
                                <div key={movie.id}>
                                    <NavLink to={`/movie/${movie.id}`}>
                                        <Image className="movie-poster" src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="" />
                                        <h5 className="movie-title">{movie.title}</h5>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
                <Button>Prev Page</Button>
                <Button onClick={this.nextPage}>Next Page</Button>
            </div>
        );
    }
}

export default NowPlayingMovies;