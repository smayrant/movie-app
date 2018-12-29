import React from 'react';
import './header.scss';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <Link to="/">
                    <Image className="rmdb-logo" src="./images/reactMovie_logo.png" alt="React Movie Logo" />
                </Link>
                <Image className="tmdb-logo" src="./images/tmdb_logo.png" alt="TMDB Movie Logo" />
            </div>
        </div>
    )
}

export default Header
