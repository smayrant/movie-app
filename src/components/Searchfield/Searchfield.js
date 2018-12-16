import React, { Component } from 'react';

class Searchfield extends Component {
    render() {
        return (
            <div className="search-bar-container">
                <input className="searchbar" type="text" placeholder="Search Movies..." />
            </div>
        );
    }
}

export default Searchfield;