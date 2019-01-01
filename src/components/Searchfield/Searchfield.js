import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../globalStylings.scss';
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

    render() {
        return (
            <div className="search-bar-container">
                <Form inline>
                    <FormGroup className="form-container" controlId="formInlineName">
                        <FormControl className="search-input" onChange={this.retrieveUserInput} type="text" placeholder="Search movies" />
                        <Link to={`/search/${this.state.search}`}>
                            <Button className="button" type="submit">Search</Button>
                        </Link>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default Searchfield;