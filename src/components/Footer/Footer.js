import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-container">
                <div className="footer-flexbox-container">
                    <div className="left-footer-content-container">
                        <ul className="footer-list-container">
                            <li className="footer-list-item">now playing in theaters</li>
                            <li className="footer-list-item">most popular</li>
                            <li className="footer-list-item">top rated</li>
                            <li className="footer-list-item">upcoming</li>
                        </ul>
                    </div>
                    <div className="right-footer-content-container">
                        <img className="footer-logo" src="./images/reactMovie_logo.png" alt="React Movie Logo" />
                    </div>
                </div>
                <div className="footer-copyright-attribution-container">
                    <p className="footer-copyright">Copyright &copy; 2019</p>
                    <p className="footer-attribution">Code and design by Sheldrick Mayrant</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
