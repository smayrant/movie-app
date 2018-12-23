import React from 'react';
import './HeroImage.scss'
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import { Slider, Slide } from 'react-materialize';

const HeroImage = (props) => {
    return (
        <div className="hero-container">
            {/* If the info from the API has not been passed down to props, display an Image Loading message. Otherwise, display the hero image and its corresponding movie details */}
            {!props.heroImageInfo ? <p>Image Loading...</p> :
                <Slider>
                    <Slide
                        src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.heroImageInfo.results[0].backdrop_path}`}
                        title="This is our big Tagline!">
                        Here's our small slogan.
                </Slide>
                </Slider>}


        </div>
    )
}

export default HeroImage
