import React from 'react';
import './HeroImage.scss'
import { IMAGE_BASE_URL } from '../../config';
import '../../globalStylings.scss';

const HeroImage = (props) => {
    return (
        <div className="hero-container">
            {/* If the info from the API has not been passed down to props, display an Image Loading message. Otherwise, display the hero image and its corresponding movie details */}
            {!props.heroImageInfo ? <p>Image Loading...</p> :
                <div className="hero-image-container"
                    style={{
                        background:
                            `linear-gradient(to bottom, rgba(0,0,0,0)
                39%,rgba(0,0,0,0)
                41%,rgba(0,0,0,0.65)
                100%), url(${IMAGE_BASE_URL}original${props.heroImageInfo.results[0].backdrop_path}), #1c1c1c`
                    }}
                >
                    <div className="hero-movie-text-container">
                        <div className=" wrapper hero-movie-text">
                            <h4>Today's Top Trending Movie</h4>
                            <h1 className="hero-movie-header">{props.heroImageInfo.results[0].original_title}</h1>
                        </div>
                    </div>
                </div>}


        </div>
    )
}

export default HeroImage
