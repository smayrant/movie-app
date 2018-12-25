import React from 'react';
import './HeroImage.scss'
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

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
                100%), url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.heroImageInfo.results[0].backdrop_path}), #1c1c1c`
                    }}
                >
                    <div className="hero-movie-text-container">
                        <div className="hero-movie-text">
                            <h1>{props.heroImageInfo.results[0].original_title}</h1>
                            <p>{props.heroImageInfo.results[0].overview}</p>
                        </div>
                    </div>
                </div>}


        </div>
    )
}

export default HeroImage
