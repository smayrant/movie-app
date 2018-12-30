import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { API_URL, API_KEY } from '../../config';
import './Searchfield.scss';

class Searchfield extends Component {

    state = {
        search: ''
    }

    retrieveUserInput = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    // once the user submits the form, the API will be searched using their search term, returning the relevant results
    movieSearch = (e) => {
        e.preventDefault();
        fetch(`${API_URL}search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${this.state.search}`)
            .then(resp => resp.json())
            .then(data =>
                this.setState({
                    movies: data
                })
            )
    }

    render() {
        return (
            <div className="search-bar-container">
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <FormControl onChange={this.retrieveUserInput} type="text" placeholder="Search movies" />
                        <Link to={`/search/${this.state.search}`}><Button className="submit-button" type="submit">Search</Button></Link>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Searchfield;