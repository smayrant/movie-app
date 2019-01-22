import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from "react-scroll";
import tmdb_logo from '../../images/tmdb_logo.png';
import twitter from '../../images/twitter.png';
import facebook from '../../images/facebook.png';
import '../../globalStylings.scss';
import './footer.scss';

const Footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop()
    }

    return (
        <footer className="footer-container">
            <div className="footer-text-container">
                <div className="footer-logo-container">
                    <img className="tmdb-logo" src={tmdb_logo} alt="TMDB Logo" />
                </div>
                <div className="wrapper footer-flexbox-container">
                    <div className="left-footer-content-container">
                        <ul className="footer-list-container">
                            <Link className="link" to="/"><li onClick={scrollToTop} className="footer-list-item">home</li></Link>
                            <Link className="link" to="/nowPlaying"><li onClick={scrollToTop} className="footer-list-item">now playing in theaters</li></Link>
                            <Link className="link" to="/popular"><li onClick={scrollToTop} className="footer-list-item">most popular</li></Link>
                            <Link className="link" to="/topRated"><li onClick={scrollToTop} className="footer-list-item">top rated</li></Link>
                            <Link className="link" to="/upcoming"><li onClick={scrollToTop} className="footer-list-item">upcoming</li></Link>
                            <div className="footer-link-container">
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/themoviedb"><img className="twitter-logo" src={twitter} alt="Twitter logo" /></a>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/themoviedb/"><img className="facebook-logo" src={facebook} alt="Facebook logo" /></a>
                            </div>
                        </ul>
                    </div>
                    <div className="right-footer-content-container">
                        <img className="flexbox-tmdb-logo" src={tmdb_logo} alt="TMDB Logo" />
                        <div className="right-footer-link-container">
                            <a href="https://twitter.com/themoviedb"><img className="right-footer-logo right-footer-twitter-logo" src={twitter} alt="Twitter logo" /></a>
                            <a href="https://www.facebook.com/themoviedb/"><img className="right-footer-logo" src={facebook} alt="Facebook logo" /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright-attribution-container">
                    <p className="footer-copyright">Copyright &copy; 2019</p>
                    <p className="footer-attribution">Code and design by Sheldrick Mayrant</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
