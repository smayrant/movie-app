import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { API_URL, API_KEY } from '../../config';
import './Searchfield.scss';

class Searchfield extends Component {
    state = {
        search: ''
    }
    changed = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    submitted = (e) => {
        e.preventDefault()
        console.log(this.state.search)
    }

    // componendDidMount(){
    //     fetch(`${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${this.state.search}`)
    // }

    render() {
        return (
            <div className="search-bar-container">
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <FormControl onChange={this.changed} type="text" placeholder="Search movies" />
                    </FormGroup>{' '}
                    <Button onSubmit={this.submitted} className="submit-button" type="submit">Search</Button>
                </Form>;
            </div>
        );
    }
}

export default Searchfield;