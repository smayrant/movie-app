import React, { Component } from 'react';
import { API_KEY, API_URL, IMAGE_BASE_URL } from '../../config';
import { NavLink } from 'react-router-dom';
import { Pager, Button } from 'react-bootstrap';
import '../../globalStylings.scss';

class UpcomingMovies extends Component {
    state = {
        movies: [],
        total_pages: null,
        page_num: 1
    }

    fetchMovies = () => {
        // Retrieve the movies that are now playing in theaters from the API
        fetch(`${API_URL}movie/upcoming?api_key=${API_KEY}&language=en-US&page=${this.state.page_num}`)
            .then(resp => resp.json())
            .then(resp => {
                this.setState({
                    movies: resp.results,
                    total_pages: resp.total_pages
                })
            })

    }

    componentDidMount() {
        this.fetchMovies()
    }

    nextPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num <= this.state.total_pages) {
            this.setState({
                page_num: page_num += 1
            }, () => this.fetchMovies())
        }
    }

    prevPage = () => {
        let { page_num } = this.state;
        if (this.state.movies && this.state.page_num > 1) {
            this.setState({
                page_num: page_num -= 1
            }, () => this.fetchMovies())
        }
    }
    render() {
        return (
            <div className="view-all-movie-container">
                <h3 className="page-heading">upcoming movies</h3>
                <hr />
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
                                        <img className="movie-poster" src={`${IMAGE_BASE_URL}w154/${movie.poster_path}`} alt="movie poster" />
                                        <h5 className="movie-title">{movie.title}</h5>
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
                <Pager>
                    <Button className="button pagination-button" onClick={this.prevPage}>Previous</Button>{' '}
                    <Button className="button pagination-button" onClick={this.nextPage}>Next</Button>
                </Pager>;
            </div>
        );
    }
}

export default UpcomingMovies;