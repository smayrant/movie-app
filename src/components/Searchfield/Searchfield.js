import React, { Component } from 'react';
import './Searchfield.scss'
import { Input, Row } from 'react-materialize';

class Searchfield extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <Row>
                    <Input s={6} placeholder='Search Movies' />
                </Row>
            </div>
        );
    }
}

export default Searchfield;