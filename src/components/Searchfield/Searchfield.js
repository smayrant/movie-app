import React, { Component } from 'react';
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Searchfield.scss';

class Searchfield extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <FormControl type="text" placeholder="Search movies" />
                    </FormGroup>{' '}
                    <Button type="submit">Search</Button>
                </Form>;
            </div>
        );
    }
}

export default Searchfield;