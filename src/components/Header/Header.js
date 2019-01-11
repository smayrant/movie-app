import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import rmdb_logo from '../../images/reactMovie_logo.png';
import popcorn_logo from '../../images/popcorn.png';
import '../../globalStylings.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content wrapper">
                <Link to="/">
                    <img className="rmdb-logo" src={rmdb_logo} alt="React Movie Logo" />
                </Link>
                <img className="popcorn-logo" src={popcorn_logo} alt="Popcorn Logo" />
            </div>
        </div>
    )
}

export default Header
