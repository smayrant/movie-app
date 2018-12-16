import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="React Movie Logo" />
                <img className="tmdb-logo" src="./images/tmdb_logo.png" alt="TMDB Movie Logo" />
            </div>
        </div>
    )
}

export default Header
