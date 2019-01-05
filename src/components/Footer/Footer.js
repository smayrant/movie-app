import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-container">
                <div className="left-footer-content-container">
                    <h2 className="footer-title">
                        React Movie
                    </h2>
                    <ul className="footer-list-container">
                        <li className="footer-list-item">now playing in theaters</li>
                        <li className="footer-list-item">most popular</li>
                        <li className="footer-list-item">top rated</li>
                        <li className="footer-list-item">upcoming</li>
                    </ul>
                </div>
                <div className="right-footer-content-container">
                    <img src="./images/reactMovie_logo.png" alt="react-movie-logo" />
                </div>
            </div>
            <div className="copyright">
                Copyright &copy; 2018
            </div>
        </div>
    )
}

export default Footer
