import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import '../../globalStylings.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content wrapper">
                <Link to="/">
                    <img className="rmdb-logo" src="./images/reactMovie_logo.png" alt="React Movie Logo" />
                </Link>
                <img className="tmdb-logo" src="./images/tmdb_logo.png" alt="TMDB Movie Logo" />
            </div>
        </div>
    )
}

export default Header
