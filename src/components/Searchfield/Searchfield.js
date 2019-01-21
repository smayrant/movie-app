import React, { Component } from 'react';
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
                <input className="search-input" onChange={this.retrieveUserInput} type="text" placeholder="Search Movies" />
                <Link to={`/search/${this.state.search}`}>
                    <button className="button search-button" type="submit">Search</button>
                </Link>
            </div>
        );
    }
}

export default Searchfield;