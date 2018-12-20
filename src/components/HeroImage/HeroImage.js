import React from 'react'

const HeroImage = (props) => {
    return (
        <div>
            <img src={`${props.image}`} alt="Hero Backdrop" />
        </div>
    )
}

export default HeroImage
