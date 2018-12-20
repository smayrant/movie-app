import React from 'react'

const HeroImage = (props) => {
    return (
        <div>
            <img src={`${props.image}`} alt="" />
        </div>
    )
}

export default HeroImage
